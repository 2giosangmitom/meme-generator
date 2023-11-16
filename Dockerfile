FROM node:21-alpine AS BUILD_IMAGE
WORKDIR /app
# Enable corepack for pnpm
RUN corepack enable
COPY package.json .
RUN pnpm install
COPY . .
RUN pnpm build

FROM node:21-alpine AS PRODUCTION_IMAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/dist /app/dist
COPY package.json .
COPY vite.config.ts .
RUN corepack enable && pnpm install typescript

EXPOSE 8080
CMD [ "pnpm", "preview" ]
