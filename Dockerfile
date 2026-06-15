# syntax=docker/dockerfile:1
# ─── Build stage ───────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# pnpm via corepack
RUN corepack enable && corepack prepare pnpm@10.28.2 --activate

# Install deps (lockfile-faithful, cacheable layer)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source and build (paraglide + SvelteKit output in ./build)
COPY . .
RUN pnpm build

# Prune to production deps so we can copy node_modules to the runtime image
RUN pnpm prune --prod

# ─── Runtime stage ─────────────────────────────────────────────────────────
FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache dumb-init

# Bring built artifacts + pruned production deps from the builder
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app
USER nodejs

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000
ARG ORIGIN
ENV ORIGIN=$ORIGIN

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "const port = process.env.PORT || 3000; require('http').get('http://localhost:' + port, (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "build"]
