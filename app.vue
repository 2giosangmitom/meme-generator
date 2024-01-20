<script setup>
const appConfig = useAppConfig();
useSeoMeta({
  title: appConfig.title,
  description: appConfig.description,
});
const memeStore = useMemeStore();
memeStore.getNewMeme();
</script>

<template>
  <main>
    <TheHeader />
    <TheContent
      :meme="memeStore.meme"
      :total="memeStore.total"
      :get-new-meme="memeStore.getNewMeme"
    />
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
</style>
