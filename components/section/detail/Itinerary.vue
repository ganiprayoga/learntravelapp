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
          <li v-for="(schedule, scheduleIdx) in activityItem.itinerary" :key="scheduleIdx">
            <div class="relative pb-8">
            <span v-if="scheduleIdx !== activityItem.itinerary.length - 1 || activityItemIdx !== itinerary.length - 1"
                  class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"/>
              <div class="relative flex items-start space-x-3">
                <div>
                  <div class="relative px-1">
                    <div class="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                      <i class="far fa-clock"></i>
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
                  <template v-if="schedule.detail" :set="open[scheduleIdx] = false">
                    <button class="btn btn-xs btn-primary mt-4 flex-initial shrink" @click="open[scheduleIdx] = true">
                      Detail
                    </button>
                    <div :class="(open[scheduleIdx]) ? `` : `hidden`" class="fixed z-10 inset-0 overflow-y-auto"
                         aria-labelledby="modal-title" role="dialog" aria-modal="true">
                      <div
                          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                             aria-hidden="true"></div>

                        <!-- This element is to trick the browser into centering the modal contents. -->
                        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
                              aria-hidden="true">&#8203;</span>

                        <!--
                          Modal panel, show/hide based on modal state.

                          Entering: "ease-out duration-300"
                            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            To: "opacity-100 translate-y-0 sm:scale-100"
                          Leaving: "ease-in duration-200"
                            From: "opacity-100 translate-y-0 sm:scale-100"
                            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        -->
                        <div
                            class="relative inline-block w-full align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                              <div class="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                  {{ schedule.detail.title }}</h3>
                                <div class="mt-2 prose-sm lg:prose-lg">
                                  <div class="divider w-full"></div>
                                  <div v-html="schedule.detail.content"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="button" class="btn btn-base-100 btn-block" @click="open[scheduleIdx] = false">
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </li>
        </template>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const open = ref([])

const props = defineProps({
  itinerary: Object
})
</script>