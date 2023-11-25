FROM node:21-alpine AS BUILD_IMAGE
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN pnpm build

FROM nginx:alpine AS PRODUCTION_IMAGE
COPY --from=BUILD_IMAGE /app/dist /usr/share/nginx/html
ENV NGINX_PORT 8080

EXPOSE 8080
CMD [ "nginx", "-g", "daemon off;" ]
