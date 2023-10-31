<script setup>
defineProps({
  msg: String,
});
</script>

<template>
  <h1 class="notify">{{ msg }}</h1>
  <h2>Hehehe</h2>
</template>

<style>
.notify {
  font-family: "Lobster", sans-serif;
  font-size: 3rem;
}
</style>
