#!/bin/bash

echo "正在部署到 Cloudflare Pages..."
echo

# 构建项目
echo "1. 构建项目..."
npm run build
if [ $? -ne 0 ]; then
    echo "构建失败！"
    exit 1
fi

echo
echo "2. 使用 Wrangler CLI 部署到 Cloudflare Pages..."
echo "首次运行时，请点击终端中的链接完成授权"
echo

# 部署到 Cloudflare Pages
npx wrangler pages deploy dist --project-name=quick-transpose --branch=main

echo
echo "部署完成！访问: https://quick-transpose.pages.dev/"