<script setup lang="ts">
import { useMemeStore } from "./store/useMemeStore";

useSeoMeta({
  title: "Meme generator",
  description: "Random Memes - Instant Laughs",
});

const memeStore = useMemeStore();
memeStore.init();
</script>

<template>
  <header>
    <NuxtImg src="/images/troll.png" alt="troll face" />
    <div>Meme generator</div>
    <span>Total memes: {{ memeStore.total }}</span>
  </header>
  <main>
    <button @click="memeStore.getNewMeme">Get new meme</button>
    <NuxtImg :src="memeStore.src" />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  height: 4rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
}

header img {
  height: 3rem;
}

header div {
  background-color: #fb773c;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-align: center;
}

header span {
  background-color: #fb773c;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-align: center;
}

button {
  background-color: #fb773c;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  outline: none;
  border: 2.5px solid black;
  cursor: pointer;
  font-size: 16px;
}

button:active {
  scale: 0.95;
}

main {
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  align-items: center;
}

main img {
  max-width: 80%;
  margin-top: 1rem;
}
</style>
