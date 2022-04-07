<template>
  <div class="flex-initial md:rounded-lg carousel w-full">
    <div v-for="(img, key) in images" :id="'slide' + key" class="carousel-item relative w-full">
      <img :src="img" class="w-full aspect-[2/1] md:aspect-[3/1] object-cover">
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a :href="'#slide' + (key - 1)" class="btn btn-circle">❮</a>
        <a :href="'#slide' + (key + 1)" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  images: Object
})
</script>