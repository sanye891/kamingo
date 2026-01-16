# 超简单部署教程（真的只要 3 步）

## 准备工作

- 一台云服务器（阿里云/腾讯云，1 核 2G，约 100 元/年）
- 系统：Ubuntu 20.04 或 22.04

---

## 第 1 步：安装 Docker（1 分钟）

SSH 登录服务器后，复制粘贴运行：

```bash
# 安装Docker和Docker Compose
curl -fsSL https://get.docker.com | sh

# 启动Docker
sudo systemctl start docker
sudo systemctl enable docker
```

---

## 第 2 步：上传项目（2 分钟）

### 方法 A：用 Git（推荐）

```bash
# 在服务器上
cd /root
git clone https://github.com/你的用户名/kamingo.git
cd kamingo
```

### 方法 B：用 FTP

- 用 FileZilla/WinSCP 把整个项目上传到 `/root/kamingo`

---

## 第 3 步：启动项目（1 分钟）

```bash
cd /root/kamingo

# 修改数据库密码
nano .env.production
# 把 your_secure_password_here 改成你的密码，Ctrl+X保存

# 启动（第一次会比较慢，需要5-10分钟）
docker-compose --env-file .env.production up -d

# 查看启动日志
docker-compose logs -f
```

等看到 "Server is running" 就成功了！按 Ctrl+C 退出日志查看。

---

## 访问网站

浏览器打开：

- 前台：`http://你的服务器IP:3000`
- 后台：`http://你的服务器IP:3000/admin`

---

## 创建管理员账户

```bash
docker exec -it kamingo-app npm run user:create -- \
  --email admin@example.com \
  --password your_password \
  --name Admin
```

---

## 常用命令

```bash
# 查看状态
docker-compose ps

# 查看日志
docker-compose logs -f app

# 重启
docker-compose restart

# 停止
docker-compose stop

# 启动
docker-compose start

# 更新代码后重新部署
git pull
docker-compose up -d --build
```

---

## 配置域名（可选）

### 1. 安装 Nginx

```bash
sudo apt update
sudo apt install nginx -y
```

### 2. 配置反向代理

```bash
sudo nano /etc/nginx/sites-available/kamingo
```

粘贴以下内容：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 3. 启用配置

```bash
sudo ln -s /etc/nginx/sites-available/kamingo /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 4. 配置 SSL（免费 HTTPS）

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com
```

---

## 故障排查

### 问题 1：端口被占用

```bash
# 查看3000端口占用
sudo lsof -i :3000
# 或者改用其他端口，修改docker-compose.yml中的端口映射
```

### 问题 2：数据库连接失败

```bash
# 查看数据库日志
docker-compose logs postgres

# 重启数据库
docker-compose restart postgres
```

### 问题 3：应用启动失败

```bash
# 查看详细日志
docker-compose logs -f app

# 重新构建
docker-compose down
docker-compose up -d --build
```

---

## 数据备份

### 备份数据库

```bash
docker exec kamingo-db pg_dump -U postgres kamingo > backup_$(date +%Y%m%d).sql
```

### 恢复数据库

```bash
cat backup_20240101.sql | docker exec -i kamingo-db psql -U postgres kamingo
```

---

## 就这么简单！

有问题随时问我 😊
