<template>
  <div>
    <Carousel
      circular
      :value="testimonials"
      :showNavigators="false"
      :numVisible="1"
      :numScroll="1"
      :autoplayInterval="3000"
    >
      <template #item="slotProps">
        <div
          class="w-full mx-auto bg-gray-100 flex flex-col lg:grid px-6 py-12 sm:px-12 lg:px-16 gap-8 sm:py-12 lg:py-12 sm:gap-8"
        >
          <div>
            <p class="text-base text-center text-muted-color text-balance">
             "{{ slotProps.data.testimonial }}"
            </p>
          </div>

          <div class="relative flex items-center gap-2.5 justify-center">
            <Avatar shape="circle" size="large"></Avatar>

            <div>
              <p class="font-mecium text-base">{{ slotProps.data.fullName }}</p>

              <p class="text-sm text-muted-color">{{ slotProps.data.position }}</p>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
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
