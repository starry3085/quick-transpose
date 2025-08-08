# Quick Transpose - 部署指南

## 🚀 部署概述

本指南详细介绍了如何在不同环境中部署Quick Transpose跨平台和弦转调应用。

### 支持的部署平台
- **Web端**: CloudStudio、Vercel、Netlify、传统服务器
- **小程序端**: 微信小程序平台
- **容器化**: Docker、Kubernetes

## 📋 部署前准备

### 环境检查
```bash
# 检查Node.js版本
node --version  # 需要 >= 18.0.0

# 检查npm版本
npm --version   # 需要 >= 9.0.0

# 检查Git版本
git --version
```

### 项目构建
```bash
# 克隆项目
git clone https://github.com/your-username/quick-transpose.git
cd quick-transpose

# 安装依赖
npm run install:all

# 构建所有平台
npm run build
```

## 🌐 Web端部署

### CloudStudio部署（推荐）

#### 自动部署（已配置）
项目已配置CloudStudio自动部署：
1. 代码推送到主分支自动触发构建
2. 构建成功后自动部署到CloudStudio
3. 访问地址：https://your-cloudstudio-url.com

#### 手动部署
```bash
# 构建生产版本
npm run build:web

# 部署命令（如果需要）
npm run deploy:web
```

### Vercel部署

#### 一键部署
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/quick-transpose)

#### 手动部署
```bash
# 安装Vercel CLI
npm i -g vercel

# 登录Vercel
vercel login

# 部署
cd platforms/web
vercel --prod
```

#### Vercel配置文件
```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "platforms/web/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/platforms/web/dist/$1"
    }
  ]
}
```

### Netlify部署

#### 通过Git部署
1. 连接GitHub仓库到Netlify
2. 设置构建命令：`npm run build:web`
3. 设置发布目录：`platforms/web/dist`
4. 部署设置：
   ```yaml
   # netlify.toml
   [build]
     command = "npm run build:web"
     publish = "platforms/web/dist"
   
   [build.environment]
     NODE_VERSION = "18"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### 传统服务器部署

#### Nginx配置
```nginx
# /etc/nginx/sites-available/quick-transpose
server {
    listen 80;
    server_name your-domain.com;
    
    root /var/www/quick-transpose;
    index index.html;
    
    # 启用gzip压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # SPA路由支持
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
}
```

### Docker部署

#### Dockerfile
```dockerfile
# Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
COPY shared/package*.json ./shared/
COPY platforms/web/package*.json ./platforms/web/

RUN npm ci

COPY . .
RUN npm run build:web

FROM nginx:alpine
COPY --from=builder /app/platforms/web/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 📱 小程序部署

### 开发版本部署

#### 微信开发者工具
1. **打开项目**
   ```
   项目路径: platforms/miniprogram
   AppID: touristappid (测试用)
   ```

2. **预览测试**
   - 点击"预览"按钮
   - 生成二维码
   - 微信扫码预览

### 生产版本部署

#### 准备工作
1. **申请小程序**
   - 登录微信公众平台
   - 注册小程序账号
   - 获取正式AppID

2. **更新配置**
   ```json
   // platforms/miniprogram/project.config.json
   {
     "appid": "your-production-appid",
     "projectname": "quick-transpose-miniprogram"
   }
   ```

#### 上传和发布
1. **代码上传**
   - 在微信开发者工具中点击"上传"按钮
   - 填写版本号和项目备注
   - 确认上传

2. **提交审核**
   - 在微信公众平台进入"版本管理"
   - 选择开发版本提交审核
   - 填写审核信息

3. **发布上线**
   - 审核通过后在"版本管理"中发布

## 🔧 环境配置

### 环境变量

#### Web端环境变量
```bash
# .env.production
NODE_ENV=production
VITE_API_BASE_URL=https://api.quick-transpose.com
VITE_ENABLE_SYNC=true
```

#### 小程序环境配置
```javascript
// platforms/miniprogram/config/env.js
const env = {
  development: {
    apiBaseUrl: 'https://dev-api.quick-transpose.com',
    enableSync: false,
    debugMode: true
  },
  production: {
    apiBaseUrl: 'https://api.quick-transpose.com',
    enableSync: true,
    debugMode: false
  }
};

module.exports = env[process.env.NODE_ENV || 'development'];
```

## 📊 监控和维护

### 性能监控
- 页面加载时间监控
- 用户行为分析
- 错误日志收集
- 资源使用统计

### 日志管理
- 结构化日志记录
- 日志轮转和清理
- 错误告警机制
- 性能指标追踪

### 备份策略
- 代码版本备份
- 用户数据备份
- 配置文件备份
- 定期备份验证

## 🔒 安全配置

### HTTPS配置
- SSL证书安装
- 强制HTTPS重定向
- 安全头设置
- CSP策略配置

### 访问控制
- 防火墙配置
- 访问频率限制
- IP白名单设置
- 安全审计日志

## 🚨 故障排除

### 常见问题

#### 构建失败
```bash
# 清理缓存
npm run clean

# 重新安装依赖
rm -rf node_modules package-lock.json
npm install
```

#### 部署失败
- 检查环境变量配置
- 验证构建输出
- 查看部署日志
- 确认服务器权限

#### 小程序审核失败
- 检查隐私政策
- 确认功能描述准确
- 验证用户协议
- 修复代码规范问题

### 应急处理

#### 回滚策略
```bash
# Web端回滚
git checkout previous-stable-tag
npm run build:web
npm run deploy:web

# 小程序回滚
# 在微信公众平台选择之前的版本重新发布
```

#### 紧急修复
1. 识别问题根因
2. 创建热修复分支
3. 快速测试验证
4. 紧急部署上线
5. 后续完整测试

## 📈 性能优化

### Web端优化
- 代码分割和懒加载
- 静态资源CDN加速
- 图片压缩和优化
- 缓存策略配置

### 小程序优化
- 分包加载策略
- 图片资源优化
- 代码压缩配置
- 内存使用优化

## 📞 支持联系

### 技术支持
- GitHub Issues: 问题报告和功能请求
- 技术文档: 详细开发和部署指南
- 社区支持: 开发者交流和讨论

### 紧急联系
- 技术负责人: [your-email@example.com]
- 运维团队: [ops-team@example.com]
- 24/7支持热线: [support-phone]

---

**最后更新**: 2025年1月8日
**文档版本**: v1.0.0
**维护团队**: Quick Transpose开发团队