<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <button class="count" type="button" @click="count++">
    count is {{ count }}
  </button>
</template>

<style>
.count {
  text-transform: uppercase;
  font-size: 1rem;
}
</style>
