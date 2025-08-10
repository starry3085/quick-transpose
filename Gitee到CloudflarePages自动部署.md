# Gitee 到 Cloudflare Pages 自动部署

## Core Features

- Gitee Actions 触发器

- Wrangler CLI 部署

- 简单构建流程

## Tech Stack

{
  "Web": {
    "arch": "react",
    "component": null
  }
}

## Design

创建独立的 Gitee Actions 工作流，推送到 Gitee 时自动构建并通过 Wrangler CLI 部署到 Cloudflare Pages

## Plan

Note: 

- [ ] is holding
- [/] is doing
- [X] is done

---

[X] 创建 .gitee/workflows 目录和 deploy.yml 文件

[X] 配置 Gitee Actions 工作流（Node.js + 构建 + Wrangler 部署）

[X] 测试推送代码触发自动部署
