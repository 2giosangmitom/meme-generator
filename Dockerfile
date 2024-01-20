FROM node:21-alpine AS BUILD_IMAGE
WORKDIR /app
RUN corepack enable
COPY . .
RUN pnpm install && pnpm build

FROM node:21-alpine AS PRODUCTION_IMAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/.output ./.output

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]
