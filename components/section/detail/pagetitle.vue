<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <div>
      <nav class="sm:hidden" aria-label="Back">
        <NuxtLink
            :to="titleProps.backURI"
            class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
          <i class="far fa-chevron-left"></i>
          Back
        </NuxtLink>
      </nav>
      <nav class="hidden sm:flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li v-for="(items, i) in titleProps.breadCrumb">
            <div class="flex" :class="( i > 0) ? 'items-center' : ''">
              <i v-if="i > 0" class="far fa-chevron-right"></i>
              <NuxtLink :to="items.uri" :class="( i > 0 ) ? 'ml-4' : ''" class="text-sm font-medium text-gray-500 hover:text-gray-700">
                {{ items.title }}
              </NuxtLink>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <i class="far fa-chevron-right"></i>
              <span aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                {{ titleProps.title }}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <div class="mt-2 md:flex md:items-center md:justify-between">
      <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-base-content sm:text-3xl sm:truncate">{{ titleProps.title }}</h2>
      </div>
      <!--      <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">-->
      <!--        <button type="button"-->
      <!--                class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-->
      <!--          Edit-->
      <!--        </button>-->
      <!--        <button type="button"-->
      <!--                class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-->
      <!--          Publish-->
      <!--        </button>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  titleProps: Object
})
</script>