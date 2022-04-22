<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-100">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="border-t border-gray-200 py-3">
          <nav class="flex" aria-label="Breadcrumb">
            <div class="flex sm:hidden">
              <NuxtLink to="/customer-bookings/trip/123884" class="group inline-flex space-x-3 text-sm font-medium text-gray-500 hover:text-gray-700">
                <ArrowNarrowLeftIcon class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-600"
                                     aria-hidden="true"/>
                <span>Back</span>
              </NuxtLink>
            </div>
            <div class="hidden sm:block">
              <ol role="list" class="flex items-center space-x-4">
                <li>
                  <div>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                      <HomeIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true"/>
                      <span class="sr-only">Home</span>
                    </a>
                  </div>
                </li>
                <li v-for="item in breadcrumbs" :key="item.name">
                  <div class="flex items-center">
                    <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                         fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"/>
                    </svg>
                    <a :href="item.href" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                       :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                  </div>
                </li>
              </ol>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <main class="py-10">
      <!-- Page header -->
      <div
          class="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
        <div class="flex items-center space-x-5">
          <div class="flex-shrink-0">
            <div class="relative">
              <img class="h-16 w-16 rounded-full"
                   src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                   alt=""/>
              <span class="absolute inset-0 shadow-inner rounded-full" aria-hidden="true"/>
            </div>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-900">{{ person.name }}</h1>
            <p class="text-sm font-medium text-gray-500">Joined since
              <time datetime="2020-08-25">August 25, 2020</time>
            </p>
          </div>
        </div>
        <div
            class="mt-6 flex flex-col justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
          <p class="text-center mb-4">{{ person.shortBio }}</p>
          <button type="button" class="btn btn-primary"><i class="fab fa-whatsapp"></i> &nbsp; WA Chat</button>
        </div>
      </div>

      <div
          class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
        <div class="space-y-6 lg:col-start-1 lg:col-span-2">
          <!-- Description list-->
          <section aria-labelledby="applicant-information-title">
            <div class="bg-white shadow sm:rounded-lg">
              <div class="px-4 py-5 sm:px-6">
                <h2 id="applicant-information-title" class="text-lg leading-6 font-medium text-gray-900">Guide
                  Information</h2>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Origin</dt>
                    <dd class="mt-1 text-sm text-gray-900">{{ person.origin }}</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Email address</dt>
                    <dd class="mt-1 text-sm text-gray-900">{{ person.email }}</dd>
                  </div>

                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">About</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ person.longBio }}
                    </dd>
                  </div>
                </dl>
              </div>
<!--              <div>-->
<!--                <a href="#"-->
<!--                   class="block bg-gray-50 text-sm font-medium text-gray-500 text-center px-4 py-4 hover:text-gray-700 sm:rounded-b-lg">Read-->
<!--                  full application</a>-->
<!--              </div>-->
            </div>
          </section>

          <!-- Comments-->
          <section aria-labelledby="notes-title">
            <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
              <div class="divide-y divide-gray-200">
                <div class="px-4 py-5 sm:px-6">
                  <h2 id="notes-title" class="text-lg font-medium text-gray-900">Certification</h2>
                </div>
                <div class="px-4 py-6 sm:px-6">
                  <ul role="list" class="">
                    <li v-for="(cert, idx) in person.certificate" :key="idx" class="py-4 flex">
                      <div class="flex-0 h-10 w-10 rounded-full bg-base-200 align-middle justify-center"><i class="flex-initial far fa-file-certificate fa-2x"></i></div>
                      <div class="flex-1 ml-3">
                        <p class="text-sm font-medium text-gray-900">{{ cert.certTitle }} <i v-if="cert.certVerified" class="text-info fas fa-badge-check"></i></p>
                        <p class="text-sm text-gray-500">{{ cert.certNo }}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section aria-labelledby="timeline-title" class="lg:col-start-3 lg:col-span-1">
          <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
            <div class="divide-y divide-gray-200">
              <div class="px-4 py-5 sm:px-6">
                <h2 id="" class="text-lg font-medium text-gray-900">Testimoni</h2>
              </div>
              <div class="px-4 py-6 sm:px-6">
                <ul role="list" class="space-y-8">
                  <li v-for="comment in comments" :key="comment.id">
                    <div class="flex space-x-3">
                      <div class="flex-shrink-0">
                        <img class="h-10 w-10 rounded-full"
                             :src="`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`"
                             alt=""/>
                      </div>
                      <div>
                        <div class="text-sm">
                          <a href="#" class="font-medium text-gray-900">{{ comment.name }}</a>
                        </div>
                        <div class="mt-1 text-sm text-gray-700">
                          <p>{{ comment.body }}</p>
                        </div>
                        <div class="mt-2 text-sm space-x-2">
                          <span class="text-gray-500 font-medium">{{ comment.date }}</span>
                          {{ ' ' }}
                          <span class="text-gray-500 font-medium">&middot;</span>
                          {{ ' ' }}
                          <button type="button" class="text-gray-900 font-medium">Reply</button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {useFetch} from "#app";

const {data} = await useFetch('/api/guide/profile/1');
const person = await data;
</script>

<script lang="ts">
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  ArrowNarrowLeftIcon,
  CheckIcon,
  HomeIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ThumbUpIcon,
  UserIcon,
} from '@heroicons/vue/solid'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/vue/outline'

const user = {
  name: 'Whitney Francis',
  email: 'whitney@example.com',
  imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
}
const navigation = [
  {name: 'Dashboard', href: '#'},
  {name: 'Jobs', href: '#'},
  {name: 'Applicants', href: '#'},
  {name: 'Company', href: '#'},
]
const breadcrumbs = [
  {name: 'Jobs', href: '#', current: false},
  {name: 'Front End Developer', href: '#', current: false},
  {name: 'Applicants', href: '#', current: true},
]
const userNavigation = [
  {name: 'Your Profile', href: '#'},
  {name: 'Settings', href: '#'},
  {name: 'Sign out', href: '#'},
]
const attachments = [
  {name: 'resume_front_end_developer.pdf', href: '#'},
  {name: 'coverletter_front_end_developer.pdf', href: '#'},
]
const eventTypes = {
  applied: {icon: UserIcon, bgColorClass: 'bg-gray-400'},
  advanced: {icon: ThumbUpIcon, bgColorClass: 'bg-blue-500'},
  completed: {icon: CheckIcon, bgColorClass: 'bg-green-500'},
}
const timeline = [
  {
    id: 1,
    type: eventTypes.applied,
    content: 'Applied to',
    target: 'Front End Developer',
    date: 'Sep 20',
    datetime: '2020-09-20',
  },
  {
    id: 2,
    type: eventTypes.advanced,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    date: 'Sep 22',
    datetime: '2020-09-22',
  },
  {
    id: 3,
    type: eventTypes.completed,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    date: 'Sep 28',
    datetime: '2020-09-28',
  },
  {
    id: 4,
    type: eventTypes.advanced,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    date: 'Sep 30',
    datetime: '2020-09-30',
  },
  {
    id: 5,
    type: eventTypes.completed,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    date: 'Oct 4',
    datetime: '2020-10-04',
  },
]
const comments = [
  {
    id: 1,
    name: 'Leslie Alexander',
    date: '4d ago',
    imageId: '1494790108377-be9c29b29330',
    body: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
  },
  {
    id: 2,
    name: 'Michael Foster',
    date: '4d ago',
    imageId: '1519244703995-f4e0f30006d5',
    body: 'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body: 'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
  },
]

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
    ArrowNarrowLeftIcon,
    BellIcon,
    HomeIcon,
    MenuIcon,
    PaperClipIcon,
    QuestionMarkCircleIcon,
    SearchIcon,
    XIcon,
  },
  setup() {
    return {
      user,
      navigation,
      breadcrumbs,
      userNavigation,
      attachments,
      eventTypes,
      timeline,
      comments,
    }
  },
}
</script>
