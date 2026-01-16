# Render + Supabase 免费部署教程

## 准备工作

### 1. 创建 GitHub 仓库

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/kamingo.git
git push -u origin main
```

---

## 第一步：创建 Supabase 数据库

### 1. 注册 Supabase

- 访问 https://supabase.com
- 点击 "Start your project"
- 用 GitHub 账号登录

### 2. 创建项目

- 点击 "New Project"
- 填写：
  - Name: `kamingo`
  - Database Password: 设置一个强密码（记住它）
  - Region: 选择离你最近的（如 Singapore）
- 点击 "Create new project"
- 等待 2-3 分钟

### 3. 获取数据库连接信息

- 项目创建完成后，点击左侧 "Project Settings"
- 点击 "Database"
- 找到 "Connection string" 部分
- 选择 "URI" 模式
- 复制连接字符串，格式如下：

```
postgresql://postgres.xxxxx:[YOUR-PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres
```

- 把 `[YOUR-PASSWORD]` 替换成你刚才设置的密码

---

## 第二步：部署到 Render

### 1. 注册 Render

- 访问 https://render.com
- 点击 "Get Started"
- 用 GitHub 账号登录

### 2. 创建 Web Service

- 点击 "New +"
- 选择 "Web Service"
- 点击 "Connect" 连接你的 GitHub 仓库
- 选择 `kamingo` 仓库

### 3. 配置服务

填写以下信息：

- **Name**: `kamingo`
- **Region**: Singapore (或离你最近的)
- **Branch**: `main`
- **Runtime**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Instance Type**: 选择 "Free"

### 4. 添加环境变量

点击 "Advanced"，然后点击 "Add Environment Variable"，添加以下变量：

```
DB_HOST=aws-0-ap-southeast-1.pooler.supabase.com
DB_PORT=6543
DB_NAME=postgres
DB_USER=postgres.你的项目ID
DB_PASSWORD=你的数据库密码
DB_SSLMODE=require
NODE_ENV=production
```

**重要**：从 Supabase 连接字符串中提取这些信息：

- `DB_HOST`: `@` 后面到 `:6543` 之前的部分
- `DB_USER`: `postgresql://` 后面到 `:` 之前的部分
- `DB_PASSWORD`: 你设置的密码

### 5. 部署

- 点击 "Create Web Service"
- 等待 5-10 分钟完成首次部署
- 部署成功后会显示绿色的 "Live"

---

## 第三步：创建管理员账户

### 方法 1：使用 Render Shell

1. 在 Render 项目页面，点击右上角 "Shell"
2. 运行：

```bash
npm run user:create -- --email admin@example.com --password your_password --name Admin
```

### 方法 2：本地连接数据库创建

1. 安装 PostgreSQL 客户端
2. 使用 Supabase 连接字符串连接
3. 运行 SQL 创建用户

---

## 访问网站

- 前台：`https://kamingo.onrender.com`
- 后台：`https://kamingo.onrender.com/admin`

---

## 更新部署

推送代码到 GitHub，Render 会自动重新部署：

```bash
git add .
git commit -m "更新内容"
git push
```

---

## 重要提示

### Render 免费版限制

- 15 分钟无访问会自动休眠
- 下次访问需要 30 秒唤醒
- 每月 750 小时免费时长

### Supabase 免费版限制

- 500MB 数据库存储
- 2GB 带宽/月
- 50,000 次 API 请求/月

### 避免休眠

使用 UptimeRobot 等服务每 10 分钟 ping 一次你的网站

---

## 故障排查

### 部署失败

查看 Render 的 "Logs" 标签，检查错误信息

### 数据库连接失败

1. 检查环境变量是否正确
2. 确认 Supabase 项目状态正常
3. 检查密码是否包含特殊字符（需要 URL 编码）

### 网站无法访问

1. 确认部署状态为 "Live"
2. 等待 DNS 生效（最多 5 分钟）
3. 检查 Render 服务状态页面

---

## 配置自定义域名

### 在 Render 中

1. 进入项目 "Settings"
2. 找到 "Custom Domain"
3. 点击 "Add Custom Domain"
4. 输入域名并按照提示配置 DNS

---

## 成本说明

- **Render**: 完全免费（有限制）
- **Supabase**: 完全免费（有限制）
- **总成本**: $0/月

适合个人项目和小型商店。
