<template>
  <div>
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