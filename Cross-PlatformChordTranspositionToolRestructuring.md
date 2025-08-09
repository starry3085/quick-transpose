# Cross-Platform Chord Transposition Tool Restructuring

## Core Features

- Monorepo Architecture with Lerna

- TypeScript Shared Code Package

- WeChat Mini Program Compliance

- Unified Build System

- Cross-Platform Code Sharing

- Automated Build Tools

- Consolidated Documentation

## Tech Stack

{
  "Web": {
    "arch": "react",
    "component": null
  },
  "Monorepo": "Lerna + npm workspaces",
  "Shared": "TypeScript + Rollup",
  "WeChat": "WeChat Mini Program Framework + TypeScript",
  "Build": "Vite + npm scripts + Cross-env"
}

## Design

Monorepo architecture with packages/ directory containing shared utilities, web React app, and WeChat Mini Program. Unified build system with cross-platform code sharing, proper TypeScript compilation, and WeChat compliance fixes.

## Plan

Note: 

- [ ] is holding
- [/] is doing
- [X] is done

---

[ ] Initialize monorepo structure with Lerna and create root package.json with workspaces configuration

[ ] Create shared package with TypeScript configuration, core utilities, and build setup using Rollup

[ ] Restructure web platform package with proper dependencies and build configuration

[ ] Restructure WeChat Mini Program package with compliant file structure and configuration

[ ] Implement unified build system with npm scripts for cross-platform development and production builds

[ ] Migrate existing chord transposition logic and utilities to shared package

[ ] Update web platform to use shared package and remove duplicate code

[ ] Update WeChat Mini Program to use shared package and ensure compliance

[ ] Create consolidated documentation structure with development guides and API references

[ ] Implement automated build tools and deployment scripts for both platforms

[ ] Set up development environment with hot reload and live compilation

[ ] Test cross-platform functionality and build processes
