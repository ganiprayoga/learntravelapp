<template>
  <div>
    <ElementCarousel />
    <div class="bg-base-200 p-4 md:p-0">
      <div class="container mx-auto py-8">
        <h1 class="text-3xl font-bold">Our favorite experiences worldwide</h1>
        <SectionCatalogGrid class="py-8"/>
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


// const {data}: { data: any } = await useFetch("/api/hello?search=doctor", {});
</script>