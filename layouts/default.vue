<template>
  <div class="bg-base-100">
    <AppsNav/>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {useMeta} from "#meta";

useMeta({
  title: computed(() => `Travelapps`)
})
</script>