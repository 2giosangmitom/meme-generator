<script setup>
const appConfig = useAppConfig();
useSeoMeta({
  title: appConfig.title,
  description: appConfig.description,
});
const state = useMemeStore();
state.getNewMeme();
</script>

<template>
  <main>
    <TheHeader />
    <span>Total: {{ state.total }}</span>

    <div class="gen__meme">
      <button class="gen--button" @click="state.getNewMeme">
        Generate new meme
      </button>
      <img v-bind:src="state.meme" />
    </div>
  </main>
</template>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg-pornhub: #ffa500;
}

.gen__meme {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.gen__meme .gen--button {
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  background-color: var(--bg-pornhub);
  border: solid black 2px;
  border-radius: 5px;
}

.gen__meme .gen--button:active {
  scale: 0.9;
  transition-duration: 300ms;
}

.gen__meme img {
  margin: 2rem 0;
  max-width: 1000px;
  height: auto;
}

@media screen and (max-width: 600px) {
  .gen__meme img {
    max-width: 400px;
  }
}

@media screen and (max-width: 500px) {
  .gen__meme img {
    max-width: 400px;
  }
}

@media screen and (max-width: 400px) {
  .gen__meme img {
    max-width: 300px;
  }
}
</style>
