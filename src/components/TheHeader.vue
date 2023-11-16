<template>
  <header class="header__container">
    <a href="https://github.com/2giosangmitom/meme_generator" target="_blank">
      <img src="/troll.webp" alt="troll face" width="50" height="50" />
    </a>
    <h2>Meme generator</h2>
    <h2>VueJS</h2>
  </header>
</template>

<style scoped>
.header__container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #000000;
  color: #ffffff;
  font-family: 'Lobster', sans-serif;
  height: 4rem;
}

.header__container h2 {
  background-color: var(--bg-pornhub);
  color: #000000;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
}

@media screen and (max-width: 600px) {
  .header__container img {
    width: 40px;
    height: 40px;
  }

  .header__container h2 {
    font-size: 1.25rem;
  }
}

@media screen and (max-width: 600px) {
  .header__container h2 {
    font-size: 1rem;
  }
}
</style>
