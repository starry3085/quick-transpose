@echo off
echo 正在部署到 Cloudflare Pages...
echo.

REM 构建并部署 Web 项目
echo 1. 构建 Web 项目...
cmd /c "cd web & npm run build"
if %errorlevel% neq 0 (
    echo 构建失败！请检查依赖是否安装完整
    pause
    exit /b 1
)

echo.
echo 2. 使用 Wrangler CLI 部署到 Cloudflare Pages...
echo 首次运行时，请点击终端中的链接完成授权
echo.

REM 部署构建后的文件到 Cloudflare Pages
cmd /c "npx wrangler pages deploy web/dist --project-name=quick-transpose --branch=main"

echo.
echo 部署完成！访问: https://quick-transpose.pages.dev/
pause

echo.
echo 部署完成！访问: https://quick-transpose.pages.dev/
pause