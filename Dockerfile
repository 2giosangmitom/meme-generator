FROM node:21-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
RUN corepack enable
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# Run the application
FROM base AS runner
ENV NODE_ENV production
WORKDIR /app
COPY --from=builder /app/.output ./.output
EXPOSE 3000
CMD [ "node", ".output/server/index.mjs" ]
