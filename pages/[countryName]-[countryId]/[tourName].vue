<template>
  <div class="container mx-auto">
    <div class="flex flex-col-reverse md:flex-col">
      <div class="flex-initial prose-sm lg:prose-lg md:mb-4 p-4">
        <div class="hidden md:flex-initial text-sm breadcrumbs">
          <ul class="pl-0 lg:pl-0">
            <li><a>Indonesia</a></li>
            <li>{{ tour.tourName }}</li>
          </ul>
        </div>
        <h1 class="mb-4 lg:mb-4"> {{ tour.tourName }}</h1>
        <div>
          <i class="fa-solid fa-star text-primary"></i>{{ tour.tourRating }} <span class="text-sm text-gray-500">(
          {{ tour.tourReviewNumber }} reviews )</span></div>
      </div>
      <div class="md:px-4">
        <ElementCarousel :images="tour.tourImage"/>
      </div>
    </div>
    <div class="px-4 divider"></div>
    <div class="flex flex-col md:flex-row px-4 gap-8">
      <div class="flex-initial w-full md:w-2/3 ">
        <article class="prose-sm lg:prose-lg ">
          <p>{{ tour.tourShortDesc }}</p>
        </article>
        <div class="divider"></div>
        <!--        Facilities-->
        <h2 class="font-medium text-xl mb-4">Place to Visit</h2>
        <ElementFancyList :list="tour.tourDetail.tourPlaces"></ElementFancyList>
        <div class="divider"></div>
        <!--        Place to Visit-->
        <h2 class="font-medium text-xl mb-4">Facilities</h2>
        <ElementFancyList :list="tour.tourDetail.tourFacility"></ElementFancyList>
        <div class="divider"></div>

        <!--Tour Not Include-->
        <h2 class="font-medium text-xl mb-4">Tour Not Include</h2>
        <ElementFancyList :list="tour.tourDetail.tourNotInclude"></ElementFancyList>
        <div class="divider"></div>

        <!--        ITINERARY-->
        <h2 class="font-medium text-xl mb-4">Itinerary</h2>
        <SectionDetailItinerary :itinerary="tour.tourItinerary" :detailed="false"/>
        <div class="divider"></div>

        <!--MORE TOUR DETAIL-->
        <h2 class="font-medium text-xl mb-4">More Tour Detail</h2>
        <div v-html="tour.tourDetail.tourContent"></div>
      </div>

      <div class="w-full md:w-1/3 ">
        <div class="rounded-lg border border-primary">
          <div class="card-body p-4">
            <h2 class="card-title">
              Rp1.895.000
            </h2>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p></p>
  </div>
</template>

<script setup lang="ts">
import {useFetch} from "#app";

const {data} = await useFetch('/api/tour/detail');
const tour = await data;
</script>