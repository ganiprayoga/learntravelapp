<template>
  <span class="fa-regular" :class="'fa-' + props.icon"></span>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: String,
  primaryColour: {
    type: String,
    required: false,
    default: '#E0A82E'
  },
  secondaryColour: {
    type: String,
    required: false,
    default: '#F9D72F'
  }
})
</script>