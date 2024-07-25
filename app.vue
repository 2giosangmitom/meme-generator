<script setup lang="ts">
useSeoMeta({
  title: "Meme generator",
});

const total = ref(0);
</script>

<template>
  <header>
    <img src="/images/troll.png" alt="troll face" />
    <div>Meme generator</div>
    <span>Total memes: {{ total }}</span>
  </header>
  <main>
    <button>Get new meme</button>
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
  justify-content: center;
  margin-top: 2rem;
}
</style>
