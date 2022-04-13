<template>
  <div class="container mx-auto">
    <div class="p-4">
      <SectionDetailPagetitle :title-props="titleProps" class="my-4"/>
      <div class="bg-white shadow overflow-hidden rounded-lg my-4">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Booking Overview</h3>
          <!--          <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>-->
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">Date of Tour</dt>
              <dd class="mt-1 text-sm text-gray-900">{{ tour.bookingDetail.tourDate }}</dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">Pax</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ tour.bookingDetail.bookingPax.adult }} adult <br/>
                {{ tour.bookingDetail.bookingPax.children }} children
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="bg-white shadow overflow-hidden rounded-lg my-4">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Requirement Checklist</h3>
          <p class="mt-1 max-w-2xl text-sm text-warning">Some items need to be confirmed.</p>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
          <div tabindex="0" class="collapse">
            <input type="checkbox" class="peer">
            <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Click me to show/hide content
            </div>
            <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p>tabindex="0" attribute is necessary to make the div focusable</p>
            </div>
          </div>
        </div>
      </div>

      <ElementContactCard class="my-4" :person="tour.tourLeader"/>

      <div class="bg-white shadow overflow-hidden rounded-lg my-4">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Itinerary</h3>
          <!--          <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>-->
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div class="sm:col-span-2">
              <SectionDetailItinerary :itinerary="tour.tourItinerary"/>
            </div>
          </dl>
        </div>
      </div>
      <div class="bg-white shadow overflow-hidden rounded-lg my-4">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Tour Gallery</h3>
          <!--          <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>-->
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div class="sm:col-span-2">
              <SectionDetailGallery :images="tour.tourImage"/>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <!--BOOKING OVERVIEW-->
  </div>
</template>

<script setup lang="ts">
import {useFetch} from "#app";

const {data} = await useFetch('/api/tour/detail');
const tour = await data;


const titleProps = {
  title: `${tour.value.tourName}`,
  breadCrumb: [
    {
      title: 'Home',
      uri: '/'
    },
    {
      title: 'My Profile',
      uri: '/profile/'
    },
    {
      title: 'Customer Booking',
      uri: '/customer-bookings/'
    }
  ],
  backURI: '/customer-bookings/'
};
//
// console.log('tour', data)
</script>