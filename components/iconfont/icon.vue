<template>
  <span class="fad" :class="'fa-' + props.icon"
        :style="'--fa-primary-color:' + props.primaryColour + '; --fa-secondary-color:' + props.secondaryColour + ';'"></span>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: String,
  primaryColour: {
    type: String,
    required: false,
    default: 'dodgerblue'
  },
  secondaryColour: {
    type: String,
    required: false,
    default: 'gold'
  }
})
</script>