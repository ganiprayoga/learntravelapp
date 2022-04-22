<template>
  <div class="flow-root">
    <ul role="list" class="-mb-8">
      <template v-for="(activityItem, activityItemIdx) in itinerary" :key="activityItemIdx">
        <li>
          <div class="relative pb-8">
            <span v-if="activityItemIdx !== itinerary.length - 1 || activityItem.itinerary.length > 0"
                  class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"/>
            <div class="relative flex items-start space-x-3">

              <div class="relative">
                <div class="h-10 w-10 rounded-full bg-primary flex items-center justify-center ring-8 ring-white">
                  <i class="fas fa-calendar"></i>
                </div>
              </div>
              <div class="m in-w-0 flex-1">
                <div>
                  <div class="">
                    <span class="font-medium text-gray-900">{{ activityItem.title }}</span>
                  </div>
                  <p class="mt-0.5 text-sm text-gray-500">{{ activityItem.subTitle }}</p>
                </div>
                <!--                <div class="mt-2 text-sm text-gray-700">-->
                <!--                  <p>-->
                <!--                    {{ activityItem.comment }}-->
                <!--                  </p>-->
                <!--                </div>-->
              </div>

            </div>
          </div>
        </li>
        <!--        <pre>Length: {{ activityItem.itinerary.length }}</pre>-->
        <template v-if="activityItem.itinerary !== null">
          <div>
          <li v-for="(schedule, scheduleIdx) in activityItem.itinerary" :key="scheduleIdx">
            <div class="relative pb-8">
            <span v-if="scheduleIdx !== activityItem.itinerary.length - 1 || activityItemIdx !== itinerary.length - 1"
                  class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"/>
              <div class="relative flex items-start space-x-3">
                <div>
                  <div class="relative px-1">
                    <div class="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                      <i class="far" :class="( schedule.icon ) ? 'fa-' + schedule.icon : `fa-clock`"></i>
                    </div>
                  </div>
                </div>
                <div class="min-w-0 flex flex-row flex-1 items-start py-1.5">
                  <div class="text-sm text-gray-500 flex-1">
                    <span class="font-medium text-gray-900">
                      {{ schedule.timeStart }}
                      <span v-if="schedule.timeEnd !==null"> - {{ schedule.timeEnd }}</span>
                    </span>
                    <p class="">{{ schedule.description }}</p>
                  </div>
                  <template v-if="schedule.detailID && detailed">
                    <NuxtLink :to="`/customer-bookings/itinerary-${$route.params.tripID}/${schedule.detailID}`" class="btn btn-xs btn-primary mt-4 flex-initial shrink">
                      Detail
                    </NuxtLink>
                  </template>
                </div>
              </div>
            </div>
          </li>
          </div>
        </template>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const open = ref([])

const props = defineProps({
  itinerary: Object,
  detailed:{
    type: Boolean,
    default: true,
    required: false
  }
})
</script>