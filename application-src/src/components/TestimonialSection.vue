<template>
  <div class="bg-gray-100 md:p-[30px] mt-[50px] md:mt-[100px]">
    <Carousel
      circular
      :value="testimonials"
      :showNavigators="false"
      :numVisible="1"
      :numScroll="1"
      :autoplayInterval="3000"
    >
      <template #item="slotProps">
        <div class="flex flex-col gap-4 p-[30px] md:px-[50px]">
          <div class="flex gap-4">
            <Avatar shape="circle" class="ring-2 ring-gray-200 p-0.5 h-10 w-10 md:h-12 md:w-12" />

            <div class="flex flex-col gap-2">
              <h3 class="text-base md:text-lg leading-none font-medium">
                {{ slotProps.data.fullName }}
              </h3>

              <span class="text-sm leading-none font-light">{{ slotProps.data.position }}</span>
            </div>
          </div>

          <p class="testimonial-text text-sm leading-[22px] text-left">
            {{ slotProps.data.testimonial }}
          </p>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import Carousel from 'primevue/carousel'
import Avatar from 'primevue/avatar'
import { ref } from 'vue'

const testimonials = ref([
  {
    imageUrl: '',
    fullName: 'Everet Morissette',
    position: 'Forward Intranet Engineer at Google',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    imageUrl: '',
    fullName: 'Everet Morissette',
    position: 'Forward Intranet Engineer at Google',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    imageUrl: '',
    fullName: 'Everet Morissette',
    position: 'Forward Intranet Engineer at Google',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
])
</script>

<style scoped>
.testimonial-text::before,
.testimonial-text::after {
  content: '"';
}
</style>
