<template>
  <div v-if="images" class="grid grid-cols-6 gap-4">
    <div v-for="(image, index) of images" :key="index" class="h-20">
      <Image preview :pt="itemImagePt" :src="image.itemImageSrc" :alt="image.alt" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from 'primevue/image'
import { ref } from 'vue'

// Define image pass-through properties for the item image
const itemImagePt = {
  root: {
    style: {
      height: '100%',
      width: '100%',
    },
  },
  image: {
    style: {
      height: '100%',
      width: '100%',
      'object-fit': 'cover',
    },
  },
}

const images = ref([
  {
    itemImageSrc: 'images/photography/gathiga-at-6pm.jpg',
    alt: 'Gathiga at 6pm',
  },
  {
    itemImageSrc: 'images/photography/kihingo-long-heights.jpg',
    alt: 'Kihingo long heights',
    },
  {
    itemImageSrc: 'images/photography/kilifi-bridge.jpg',
    alt: 'Kilfi bridge',
    },
  {
    itemImageSrc: 'images/photography/manga-close.jpg',
    alt: 'Manda close',
    },
  {
    itemImageSrc: 'images/photography/unfinished-building.jpg',
    alt: 'Unfininshed building',
    },
  {
    itemImageSrc: 'images/photography/mariakani-sunset.jpg',
    alt: 'Mariakani sunset',
  },
])
</script>

<style scoped></style>
