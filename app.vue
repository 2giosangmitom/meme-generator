<script setup lang="ts">
const appConfig = useAppConfig();
useSeoMeta({
  title: appConfig.title,
  description: appConfig.description,
});
</script>

<template>
  <div>
    <h1>Hello ae phe loi</h1>
  </div>
</template>
