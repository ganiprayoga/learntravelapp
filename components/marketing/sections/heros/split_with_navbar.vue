<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <div class="relative">
      <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div class="container mx-auto sm:px-6 lg:px-8">
        <div class="sm:overflow-hidden">
          <div class="absolute inset-0">
            <img class="h-full w-full object-cover" src="https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832_960_720.jpg" alt="People working on laptops" />
            <div class="absolute inset-0 mix-blend-multiply" />
          </div>
          <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span class="block">Unforgettable</span>
              <span class="block text-blue-600">Travel experiences</span>
            </h1>
            <div class="mt-10 sm:mt-12">
              <form action="#" class="sm:max-w-xl lg:mx-0">
                <div class="sm:flex">
                  <div class="min-w-0 flex-1">
                    <label for="email" class="sr-only">Where are you going?</label>
                    <input id="email" placeholder="Where are you going?" class="input input-bordered input-lg w-full" />
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <button type="submit" class="btn btn-lg btn-block btn-primary">Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const features = [
  {
    name: 'Analytics',
    href: '#',
    description: 'Get a better understanding of where your traffic is coming from.',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    href: '#',
    description: 'Speak directly to your customers in a more meaningful way.',
    icon: CursorClickIcon,
  },
  { name: 'Security', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    href: '#',
    description: "Connect with third-party tools that you're already using.",
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    href: '#',
    description: 'Build strategic funnels that will drive your customers to convert',
    icon: RefreshIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      features,
      callsToAction,
      resources,
      recentPosts,
    }
  },
}
</script>