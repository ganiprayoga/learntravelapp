<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="tour in props.tours" class="card bg-base-100 shadow-xl">
        <figure><img src="https://picsum.photos/400/225" alt="Shoes"/></figure>
        <div class="card-body p-4">
          <h2 class="card-title">
            Amazing Komodo Island
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>Amazing description for tour {{ tour }}}</p>
          <div class="card-actions">
            <NuxtLink :to="'/indonesia-62/' + tour" class="btn btn-primary btn-block">Book Now</NuxtLink>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  tours: Object
})
</script>