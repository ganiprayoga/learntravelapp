<template>
  <div class="container mx-auto p-4">
    <SectionDetailPagetitle :page-title="pageTitle"/>

    <div class="pb-5 border-b border-gray-200 mt-8">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Upcoming Tour</h3>
    </div>

    <SectionCatalogBooktour />

    <div class="pb-5 border-b border-gray-200 mt-8">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Past Tour</h3>
    </div>

  </div>
</template>

<script setup lang="ts">
const pageTitle = 'Customer Bookings';
</script>