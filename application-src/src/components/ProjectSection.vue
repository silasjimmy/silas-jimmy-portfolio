<template>
  <Carousel circular>
    <Image src='https://primefaces.org/cdn/primevue/images/product/' alt="image" width="250" />
    <Image src='https://primefaces.org/cdn/primevue/images/product/' alt="image" width="250" />
    <Image src='https://primefaces.org/cdn/primevue/images/product/' alt="image" width="250" />
    <Image src='https://primefaces.org/cdn/primevue/images/product/' alt="image" width="250" />
    <Image src='https://primefaces.org/cdn/primevue/images/product/' alt="image" width="250" />
  </Carousel>
</template>

<script setup lang="ts">
import Carousel from 'primevue/carousel'
import Image from 'primevue/image';
import { ref } from 'vue';

const carouselOptions = ref([])
</script>

<style scoped></style>
