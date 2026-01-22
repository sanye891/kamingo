# 使用官方Node.js 18镜像
FROM node:18-alpine

# 安装必要的系统依赖
RUN apk add --no-cache \
    python3 \
    make \
    g++

# 设置工作目录
WORKDIR /app

# 复制package文件
COPY package*.json ./

# 安装所有依赖（包括devDependencies，因为需要TypeScript编译）
RUN npm ci

# 复制所有项目文件
COPY . .

# 编译扩展中的TypeScript文件（如果存在）
RUN if [ -f extensions/sample/package.json ]; then \
      cd extensions/sample && npm run tsc && cd ../..; \
    fi

# 构建EverShop应用（限制内存使用）
RUN NODE_OPTIONS="--max-old-space-size=512" npm run build

# 删除devDependencies以减小镜像大小
RUN npm prune --production

# 暴露3000端口
EXPOSE 3000

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# 启动应用
CMD ["npm", "start"]
