<template>
  <div class="bg-base-100">
    <AppsNavbar/>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {useMeta} from "#meta";

useMeta({
  title: computed(() => `Travelapps`)
})
</script>