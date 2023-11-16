FROM node:21-alpine AS BUILD_IMAGE
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN pnpm build

FROM node:21-alpine AS PRODUCTION_IMAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/dist /app/dist
COPY vite.config.ts package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install

EXPOSE 8080
CMD [ "pnpm", "preview" ]
