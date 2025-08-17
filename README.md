# Shopify Compliance AI — Starter (v4-ready)

This is a **production-ready starter** for a Shopify embedded app with:
- **NestJS** backend (TypeScript)
- **Next.js** frontend with **Shopify Polaris** + **App Bridge**
- **PostgreSQL** (via connection string) + **Redis** (optional)
- **Docker Compose** for local dev
- Ready for **Railway/Render/Fly** or **Kubernetes** later

> ⚠️ You still need to create a Shopify app in the **Partner Dashboard** and set environment variables.

## Quickstart (Local, Docker)
1. Copy `.env.example` to `.env` and fill values.
2. `docker compose up --build`
3. Open the **App URL** from Partner Dashboard after installation (embedded in the Shopify Admin).

## Environment
See `.env.example` for variables. The important ones:
- `SHOPIFY_API_KEY`, `SHOPIFY_API_SECRET`
- `APP_URL` (e.g. https://your-tunnel-url.ngrok.app)
- `SCOPES` (comma-separated)
- `POSTGRES_URL` (e.g. postgres://...)
- `OPENAI_API_KEY` (optional for AI; not required to start)

## Monorepo
- `/server` — NestJS backend (auth, webhooks, executors stubs)
- `/web` — Next.js frontend (Polaris, embedded, dashboard)

## What works now
- OAuth install flow (server)
- Webhooks registration (server)
- Embedded app frame with Polaris (web)
- Health checks and a placeholder compliance score

## Next steps
- Wire executors to real Shopify APIs (footer links, Merchant Center)
- Plug RAG/LLM in `server/src/common/ai.service.ts`
- Add DSAR processor

---

**Happy shipping!**
