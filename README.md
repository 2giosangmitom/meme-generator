# meme_generator

A meme generator website, made with Vue.js 3 + Firebase

## Build Docker image from `Dockerfile`
### Prerequisite
- Docker (with buildx)
- make

### Steps
- Build Docker image
```sh
make build
```

- Run Docker image
```sh
make run
```

- How to stop and remove the container?
```sh
make stop && make remove
```

## Project Setup (for local development)

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
