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
          <div class="divider"></div>
        </article>
        <SectionDetailItinerary :itinerary="tour.tourItinerary"/>
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
const tour = {
  tourURI: "komodo-island-2-day-tour",
  tourName: "Komodo Islands: Private 2-Day Tour with Phinisi Boat Stay",
  tourImage: [
    "https://cdn.getyourguide.com/img/tour/5a438bd7837b4.jpeg/98.jpg",
    "https://cdn.getyourguide.com/img/tour/5cbec1398147a.jpeg/145.jpg",
    "https://cdn.getyourguide.com/img/tour/5cbec3d9404be.jpeg/145.jpg",
    "https://cdn.getyourguide.com/img/tour/5a438b9d3ac88.jpeg/145.jpg"
  ],
  tourPrice: 6867000,
  tourRating: 4.4,
  tourReviewNumber: 43,
  tourShortDesc: "Look for Komodo Dragons and other wildlife on a private 2-day tour of the Komodo islands. Go for a jungle trek in the habitat of the giant lizards, discover a beach of amazing pink sand and spend the night on a boat.",
  tourItinerary: [
    {
      title: "Day 1",
      subTitle: "Kelor Island - Menjerite - Rinca - Kalong Kinca",
      itinirary: [
        {
          timeStart: "08:00",
          timeEnd: "10:00",
          description: "Pick up from Hotel or Airport"
        },
        {
          timeStart: "10:00",
          timeEnd: "10:30",
          description: "Sailing to Kelor Island"
        },
        {
          timeStart: "10:30",
          timeEnd: "12:00",
          description: "Arriving at Kelor Island"
        },
        {
          timeStart: "12:00",
          timeEnd: "13:00",
          description: "Lunch while sailing to Menjerite"
        },
      ]
    },
    {
      title: "Day 2",
      subTitle: "Padar Island - Pink Beach - Manta Point - Taka Makassar - Sebayur Island",
      itinirary: [
        {
          timeStart: "05:00",
          timeEnd: "06:00",
          description: "Preparing for Sunrise Trekking in Padar Island"
        },
        {
          timeStart: "06:00",
          timeEnd: "08:00",
          description: "Activity in Padar Island"
        },
        {
          timeStart: "08:00",
          timeEnd: "09:00",
          description: "Breakfast"
        },
        {
          timeStart: "09:00",
          timeEnd: "11:00",
          description: "Sailing to Pink Beach"
        },
      ]
    }
  ]
}
</script>