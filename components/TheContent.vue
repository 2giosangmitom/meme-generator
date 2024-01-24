<script setup>
defineProps({
  total: Number,
  meme: String,
  getNewMeme: Function,
});
</script>

<template>
  <span>Total: {{ total }}</span>

  <div class="meme">
    <button class="meme__button" @click="getNewMeme">Generate new meme</button>
    <img v-bind:src="meme" />
  </div>
</template>

<style scoped>
.meme {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.meme__button {
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  background-color: var(--bg-pornhub);
  border: solid black 2px;
  border-radius: 5px;
}

.meme__button:active {
  scale: 0.9;
  transition-duration: 300ms;
}

.meme img {
  margin: 2rem 0;
  max-width: 1000px;
  height: auto;
}

@media screen and (max-width: 600px) {
  .meme img {
    max-width: 400px;
  }
}

@media screen and (max-width: 500px) {
  .meme img {
    max-width: 400px;
  }
}

@media screen and (max-width: 400px) {
  .meme img {
    max-width: 300px;
  }
}
</style>
