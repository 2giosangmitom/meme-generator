<script setup>
import { useMemeStore } from "~/store/useMemeStore";

useSeoMeta({
  title: "Meme library",
  description: "Random Memes - Instant Laughs",
});

const memeStore = useMemeStore();
const allMemes = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  await memeStore.init();
  const memeUrls = await Promise.all(
    memeStore.items.map((meme) => getDownloadLink(meme)),
  );
  allMemes.value = memeUrls;
  isLoading.value = false;
});
</script>

<template>
  <div class="meme-container">
    <div v-if="isLoading" class="masonry-grid">
      <div v-for="n in 6" :key="n" class="masonry-item">
        <div class="skeleton"></div>
      </div>
    </div>
    <div v-else class="masonry-grid">
      <div class="masonry-item" v-for="meme in allMemes" :key="meme">
        <img :src="meme" alt="meme" class="meme-image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.meme-container {
  padding: 20px;
}

.skeleton-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.skeleton {
  width: 100%;
  padding-top: 100%;
  background-color: #e0e0e0;
  animation: pulse 1.5s infinite ease-in-out;
  border-radius: 8px;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.masonry-grid {
  column-count: 3;
  column-gap: 10px;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 10px;
  position: relative;
}

.masonry-item .skeleton,
.masonry-item .meme-image {
  width: 100%;
  border-radius: 8px;
}

.meme-image {
  display: block;
  object-fit: cover;
}

@media screen and (max-width: 660px) {
  .masonry-grid {
    column-count: 2;
  }
}
</style>
