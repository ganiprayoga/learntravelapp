<template>
  <div>
    <MarketingSectionsHerosSplit_with_navbar/>
    <NuxtLink to="/">Welcome to the TV App</NuxtLink>
    <form class="form" @submit.prevent="searchForStuff">
      <input type="text" v-model="searchText">
      <button class="btn">Search for TV Shows</button>
    </form>
    <div class="stuff">
      <div v-for="show in myData">
        <img :src="show.show?.image?.medium" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const searchText = ref("")
const myData = ref([]) as any;

async function searchForStuff() {
  const data = await fetch(`/api/hello?search=${searchText.value}`)
  const json = await data.json();
  console.log('json', json);
  myData.value = json;
}

const toursData = [
  {
    name: "Komodo Island",
  }
]


// const {data}: { data: any } = await useFetch("/api/hello?search=doctor", {});
</script>