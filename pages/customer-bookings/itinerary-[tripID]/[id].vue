<template>
  <div class="container lg:w-1/2 mx-auto p-4 bg-base-100">
    <SectionDetailPagetitle :title-props="titleProps" class="my-4"/>
    <div v-html="ite.content" class="prose"></div>
  </div>
</template>

<script setup lang="ts">
import {useFetch} from "#app";

const route = useRoute()

const iteID = route.params.id;
const tripID = route.params.tripID;
const {data} = await useFetch(`/api/tour/itinerary-detail/${iteID}`);
const ite = await data;


const titleProps = {
  title: `${ite.value.title}`,
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
    },
    {
      title: 'Trip',
      uri: '/customer-bookings/trip/' + tripID
    }
  ],
  backURI: '/customer-bookings/trip/' + tripID
};
//
console.log('data', data)
</script>