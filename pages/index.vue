<script setup lang="ts">
import { useMemeStore } from "~/store/useMemeStore";

useSeoMeta({
  title: "Meme generator",
  description: "Random Memes - Instant Laughs",
});

const memeStore = useMemeStore();
onMounted(() => {
  memeStore.init();
});
</script>

<template>
  <header class="header">
    <NuxtLink to="/library">
      <NuxtImg class="header__logo" src="/images/troll.png" alt="troll face" />
    </NuxtLink>
    <div class="header__title">Meme generator</div>
    <span class="header__total">Total memes: {{ memeStore.total }}</span>
  </header>
  <main class="main">
    <button class="main__button" @click="memeStore.getNewMeme">
      Get new meme
    </button>
    <NuxtImg class="main__image" :src="memeStore.src" />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f8eded;
}

.header {
  height: 4rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
}

.header__logo {
  height: 3rem;
  width: auto;
}

.header__title,
.header__total {
  background-color: #fb773c;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
}

.main {
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  align-items: center;
}

.main__button {
  background-color: #fb773c;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  outline: none;
  border: 2.5px solid black;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.1s;
}

.main__button:active {
  transform: scale(0.95);
}

.main__image {
  max-width: 80%;
  margin-top: 1rem;
}

@media screen and (max-width: 660px) {
  .header__title,
  .header__total {
    padding: 0.3rem 0.5rem;
  }

  .header__logo {
    height: 2rem;
  }

  .header {
    padding: 0 0.5rem;
  }
}
</style>
