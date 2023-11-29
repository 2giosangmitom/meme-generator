# meme generator

A meme generator website, made with Vue.js 3 + Firebase

## Table of contents

<!--toc:start-->
- [meme generator](#meme-generator)
  - [Table of contents](#table-of-contents)
  - [Build Docker image from `Dockerfile`](#build-docker-image-from-dockerfile)
    - [Prerequisite](#prerequisite)
    - [Steps](#steps)
  - [Project Setup (for local development)](#project-setup-for-local-development)
    - [Compile and Hot-Reload for Development](#compile-and-hot-reload-for-development)
    - [Type-Check, Compile and Minify for Production](#type-check-compile-and-minify-for-production)
    - [Run Unit Tests with `Vitest`](#run-unit-tests-with-vitest)
    - [Lint with `ESLint`](#lint-with-eslint)
<!--toc:end-->

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

### Run Unit Tests with `Vitest`

```sh
pnpm test:unit
```

### Lint with `ESLint`

```sh
pnpm lint
```
