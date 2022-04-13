<template>
  <div class="grid grid-cols-3 lg:grid-cols-6 gap-2">
    <div v-for="(img, key) in images" :id="'slide' + key" class="relative w-full">
      <img :src="img" class="w-full aspect-square object-cover">
    </div>
  </div>
</template>


<script setup lang="ts">
const props = defineProps({
  images: Object
})
</script>