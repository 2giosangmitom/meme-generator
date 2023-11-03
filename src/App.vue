<script setup>
import TheHeader from './components/TheHeader.vue'
import { useMemeStore } from './stores/meme'
const meme = useMemeStore()
</script>

<template>
  <main>
    <TheHeader />

    <div class="flex flex-col items-center">
      <button
        class="font-sans font-medium text-lg mt-14 cursor-pointer px-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded uppercase outline-none w-fit"
        @click="meme.newmeme()"
      >
        Generate new meme
      </button>
      <img v-bind:src="meme.meme" alt="meme" class="mt-4 sm:max-w-xl max-w-xs" />
    </div>
  </main>
</template>

<style scoped></style>
