<template>
  <div class="container mx-auto p-4">
    <SectionDetailPagetitle :title-props="titleProps"/>

    <div class="pb-5 border-b border-gray-200 mt-8">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Upcoming Tour</h3>
    </div>

    <SectionCatalogBooktour/>

    <div class="pb-5 border-b border-gray-200 mt-8">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Past Tour</h3>
    </div>

  </div>
</template>

<script setup lang="ts">
const titleProps = {
  title: 'Customer Bookings',
  breadCrumb: [
    {
      title: 'Home',
      uri: '/'
    },
    {
      title: 'My Profile',
      uri: '/profile/'
    }
  ],
  backURI: '/'
};
</script>