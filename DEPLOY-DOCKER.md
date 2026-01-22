# Docker 部署完整指南

本指南提供使用 Docker 和 Docker Compose 部署 EverShop 项目的完整步骤。

---

## 前置要求

- Docker 20.10+
- Docker Compose 2.0+
- 至少 2GB RAM
- 至少 10GB 磁盘空间
- Node.js 18+ (仅在本地编译扩展时需要)

---

## 重要说明

**关于扩展编译：**

本项目包含 TypeScript 扩展，需要在 Docker 构建前编译。Dockerfile 会自动处理编译过程，但如果你在本地修改了扩展代码后需要重新部署，请先手动编译：

```bash
cd extensions/sample && npm run tsc && cd ../..
```

---

## 快速开始

### 部署前检查清单

在开始部署前，请确认：

- ✅ Docker 和 Docker Compose 已安装
- ✅ Node.js 18+ 已安装（用于编译扩展）
- ✅ 已克隆或上传项目到服务器
- ✅ 已修改 `.env.production` 中的密码和密钥
- ✅ 扩展已编译（`extensions/sample/dist/` 目录存在）

### 1. 克隆项目

```bash
git clone https://github.com/你的用户名/kamingo.git
cd kamingo
```

### 2. 配置环境变量

复制并编辑环境变量文件：

```bash
cp .env.production .env.production.local
nano .env.production.local
```

**必须修改的配置：**

```bash
# 数据库密码（使用强密码）
DB_PASSWORD=your_secure_password_here

# JWT密钥（使用随机字符串）
JWT_ADMIN_SECRET=生成的随机密钥1
JWT_ADMIN_REFRESH_SECRET=生成的随机密钥2
JWT_CUSTOMER_SECRET=生成的随机密钥3
JWT_CUSTOMER_REFRESH_SECRET=生成的随机密钥4
```

**生成随机密钥：**

```bash
# 运行 4 次，每次生成一个不同的密钥
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 3. 启动服务

```bash
# 如果项目包含TypeScript扩展，先编译
cd extensions/sample && npm run tsc && cd ../..

# 使用自定义环境变量文件启动
docker-compose --env-file .env.production.local up -d

# 或者使用默认的 .env.production
docker-compose --env-file .env.production up -d
```

### 4. 查看日志

```bash
# 查看所有服务日志
docker-compose logs -f

# 只查看应用日志
docker-compose logs -f app

# 只查看数据库日志
docker-compose logs -f postgres
```

### 5. 创建管理员账户

等待应用启动完成后（看到 "Server is running"），创建管理员账户：

```bash
docker exec -it kamingo-app npm run user:create -- \
  --email admin@example.com \
  --password Admin123! \
  --name Admin
```

### 6. 访问应用

- **前台**: http://localhost:3000
- **后台**: http://localhost:3000/admin

---

## 配置说明

### docker-compose.yml

项目包含两个服务：

1. **postgres** - PostgreSQL 15 数据库
   - 端口: 5432
   - 数据持久化: `postgres_data` volume

2. **app** - EverShop 应用
   - 端口: 3000
   - 依赖: postgres 服务
   - 持久化目录:
     - `./media` - 上传的媒体文件
     - `./.evershop` - 构建文件

### 环境变量

| 变量名                        | 说明               | 默认值               | 必需 |
| ----------------------------- | ------------------ | -------------------- | ---- |
| `DB_PASSWORD`                 | 数据库密码         | change_this_password | ✅   |
| `JWT_ADMIN_SECRET`            | 管理员JWT密钥      | -                    | ✅   |
| `JWT_ADMIN_REFRESH_SECRET`    | 管理员刷新令牌密钥 | -                    | ✅   |
| `JWT_CUSTOMER_SECRET`         | 客户JWT密钥        | -                    | ✅   |
| `JWT_CUSTOMER_REFRESH_SECRET` | 客户刷新令牌密钥   | -                    | ✅   |

**注意：** 项目已在 `config/production.json` 中配置了 session 和 cookie 设置，无需额外配置。

---

## 常用命令

### 服务管理

```bash
# 启动所有服务
docker-compose up -d

# 停止所有服务
docker-compose stop

# 重启所有服务
docker-compose restart

# 停止并删除所有容器
docker-compose down

# 停止并删除所有容器和数据卷（⚠️ 会删除数据库数据）
docker-compose down -v
```

### 查看状态

```bash
# 查看服务状态
docker-compose ps

# 查看资源使用情况
docker stats kamingo-app kamingo-db
```

### 进入容器

```bash
# 进入应用容器
docker exec -it kamingo-app sh

# 进入数据库容器
docker exec -it kamingo-db psql -U postgres kamingo
```

### 更新部署

```bash
# 拉取最新代码
git pull

# 如果修改了TypeScript文件，需要先编译扩展
cd extensions/sample && npm run tsc && cd ../..

# 重新构建并启动
docker-compose up -d --build

# 查看日志确认启动成功
docker-compose logs -f app
```

---

## 数据备份与恢复

### 备份数据库

```bash
# 创建备份
docker exec kamingo-db pg_dump -U postgres kamingo > backup_$(date +%Y%m%d_%H%M%S).sql

# 压缩备份
gzip backup_*.sql
```

### 恢复数据库

```bash
# 解压备份（如果已压缩）
gunzip backup_20240101_120000.sql.gz

# 恢复数据库
cat backup_20240101_120000.sql | docker exec -i kamingo-db psql -U postgres kamingo
```

### 备份媒体文件

```bash
# 打包媒体文件
tar -czf media_backup_$(date +%Y%m%d).tar.gz media/

# 恢复媒体文件
tar -xzf media_backup_20240101.tar.gz
```

---

## 生产环境优化

### 1. 使用 Nginx 反向代理

创建 `nginx.conf`:

```nginx
upstream evershop {
    server localhost:3000;
}

server {
    listen 80;
    server_name your-domain.com;

    # 客户端最大上传大小
    client_max_body_size 50M;

    location / {
        proxy_pass http://evershop;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # 静态文件缓存
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        proxy_pass http://evershop;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 2. 配置 SSL (HTTPS)

```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx -y

# 获取 SSL 证书
sudo certbot --nginx -d your-domain.com
```

### 3. 设置自动备份

创建备份脚本 `backup.sh`:

```bash
#!/bin/bash
BACKUP_DIR="/root/backups"
DATE=$(date +%Y%m%d_%H%M%S)

# 创建备份目录
mkdir -p $BACKUP_DIR

# 备份数据库
docker exec kamingo-db pg_dump -U postgres kamingo | gzip > $BACKUP_DIR/db_$DATE.sql.gz

# 备份媒体文件
tar -czf $BACKUP_DIR/media_$DATE.tar.gz media/

# 删除30天前的备份
find $BACKUP_DIR -name "*.gz" -mtime +30 -delete

echo "Backup completed: $DATE"
```

添加到 crontab:

```bash
# 编辑 crontab
crontab -e

# 添加每天凌晨2点自动备份
0 2 * * * /root/kamingo/backup.sh >> /var/log/kamingo-backup.log 2>&1
```

### 4. 监控和日志

```bash
# 设置日志轮转
cat > /etc/logrotate.d/kamingo << EOF
/var/lib/docker/containers/*/*.log {
    rotate 7
    daily
    compress
    missingok
    delaycompress
    copytruncate
}
EOF

# 查看实时日志
docker-compose logs -f --tail=100 app
```

---

## 故障排查

### 问题 1: 端口被占用

```bash
# 查看端口占用
sudo lsof -i :3000
sudo lsof -i :5432

# 修改端口映射
# 编辑 docker-compose.yml，修改 ports 配置
# 例如: "8080:3000" 使用 8080 端口
```

### 问题 2: 数据库连接失败

```bash
# 检查数据库状态
docker-compose ps postgres

# 查看数据库日志
docker-compose logs postgres

# 重启数据库
docker-compose restart postgres

# 检查数据库连接
docker exec -it kamingo-db psql -U postgres -c "SELECT version();"
```

### 问题 3: 应用启动失败

```bash
# 查看详细日志
docker-compose logs -f app

# 检查环境变量
docker exec kamingo-app env | grep DB_
docker exec kamingo-app env | grep JWT_

# 重新构建
docker-compose down
docker-compose up -d --build
```

### 问题 4: 构建失败

```bash
# 检查扩展是否已编译
ls -la extensions/sample/dist/

# 如果dist目录不存在或为空，手动编译
cd extensions/sample && npm run tsc && cd ../..

# 清理 Docker 缓存
docker system prune -a

# 重新构建（不使用缓存）
docker-compose build --no-cache

# 检查磁盘空间
df -h
```

### 问题 5: 内存不足

```bash
# 查看内存使用
free -h
docker stats

# 限制容器内存（编辑 docker-compose.yml）
services:
  app:
    mem_limit: 1g
    mem_reservation: 512m
```

### 问题 6: 扩展编译失败

```bash
# 检查Node.js版本（需要18+）
node --version

# 如果版本过低，更新Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 检查扩展目录
ls -la extensions/sample/

# 重新安装依赖并编译
cd extensions/sample
npm install
npm run tsc
cd ../..

# 验证dist目录已创建
ls -la extensions/sample/dist/
```

---

## 性能优化

### 1. 数据库优化

编辑 `docker-compose.yml`，添加 PostgreSQL 配置：

```yaml
postgres:
  command:
    - "postgres"
    - "-c"
    - "max_connections=200"
    - "-c"
    - "shared_buffers=256MB"
    - "-c"
    - "effective_cache_size=1GB"
    - "-c"
    - "work_mem=16MB"
```

### 2. Node.js 优化

添加 Node.js 环境变量：

```yaml
app:
  environment:
    NODE_OPTIONS: "--max-old-space-size=2048"
```

---

## 安全建议

1. ✅ **修改默认密码** - 不要使用默认的数据库密码
2. ✅ **使用强密钥** - JWT 密钥应该是随机生成的长字符串
3. ✅ **启用防火墙** - 只开放必要的端口（80, 443）
4. ✅ **定期备份** - 设置自动备份脚本
5. ✅ **更新系统** - 定期更新 Docker 和系统包
6. ✅ **使用 HTTPS** - 生产环境必须使用 SSL 证书
7. ✅ **限制访问** - 数据库端口不要暴露到公网

---

## 卸载

```bash
# 停止并删除所有容器
docker-compose down

# 删除数据卷（⚠️ 会删除所有数据）
docker-compose down -v

# 删除镜像
docker rmi kamingo-app

# 删除项目文件
cd ..
rm -rf kamingo
```

---

## 获取帮助

- EverShop 文档: https://evershop.io/docs
- Docker 文档: https://docs.docker.com
- 项目 Issues: https://github.com/你的用户名/kamingo/issues

---

## 总结

Docker 部署的优势：

- ✅ 环境一致性 - 开发和生产环境完全一致
- ✅ 快速部署 - 一条命令启动所有服务
- ✅ 易于维护 - 更新和回滚都很简单
- ✅ 资源隔离 - 不会影响系统其他服务
- ✅ 可移植性 - 可以在任何支持 Docker 的平台运行

祝部署顺利！🚀
