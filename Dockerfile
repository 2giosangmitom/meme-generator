FROM node:21-alpine AS BUILD_IMAGE
WORKDIR /app
RUN corepack enable
COPY . .
RUN pnpm install && pnpm build

EXPOSE 3000
CMD [ "node", ".output/server/index.mjs" ]
