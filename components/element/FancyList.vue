<template>
  <div>
    <ul role="list" class="">
      <li v-for="(item, idx) in list" :key="idx" class="py-2">
        <div class="flex space-x-3">
          <div class="h-6 w-6 rounded-full"><i :class="`far fa-${icon}`"></i></div>
          <div class="flex-1 space-y-1">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-medium">{{ item }}</h3>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  list: Object,
  icon: {
    type: String,
    default: 'check',
    required: false,

  }
});
</script>