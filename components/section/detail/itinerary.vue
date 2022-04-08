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
                <div class="min-w-0 flex-1 py-1.5">
                  <div class="text-sm text-gray-500">
                    <span href="activityItem.person.href" class="font-medium text-gray-900">
                      {{ schedule.timeStart }}
                      <span v-if="schedule.timeEnd !==null"> - {{ schedule.timeEnd }}</span>
                    </span>
                    <p>{{ schedule.description }}</p>
                    <button class="btn btn-xs btn-info mt-4">Detail</button>
                  </div>
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
const props = defineProps({
  itinerary: Object
})
</script>

<script lang="ts">
import {ChatAltIcon, TagIcon, UserCircleIcon} from '@heroicons/vue/solid'

const activity = [
  {
    id: 1,
    type: 'comment',
    person: {name: 'Eduardo Benz', href: '#'},
    imageUrl:
        'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '6d ago',
  },
  {
    id: 2,
    type: 'assignment',
    person: {name: 'Hilary Mahy', href: '#'},
    assigned: {name: 'Kristin Watson', href: '#'},
    date: '2d ago',
  },
  {
    id: 3,
    type: 'tags',
    person: {name: 'Hilary Mahy', href: '#'},
    tags: [
      {name: 'Bug', href: '#', color: 'bg-rose-500'},
      {name: 'Accessibility', href: '#', color: 'bg-indigo-500'},
    ],
    date: '6h ago',
  },
  {
    id: 4,
    type: 'comment',
    person: {name: 'Jason Meyers', href: '#'},
    imageUrl:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
    date: '2h ago',
  },
]

export default {
  components: {
    ChatAltIcon,
    TagIcon,
    UserCircleIcon,
  },
  setup() {
    return {
      activity,
    }
  },
}
</script>