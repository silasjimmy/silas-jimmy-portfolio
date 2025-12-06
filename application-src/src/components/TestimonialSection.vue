<template>
  <div class="bg-gray-100 p-[30px]">
    <Carousel :value="testimonials" :showNavigators="false">
      <template #item="slotProps">
        <div class="flex flex-col gap-4 px-[50px] py-[30px]">
          <div class="flex gap-4">
            <Avatar shape="circle" size="large"></Avatar>

            <div class="flex flex-col gap-2">
              <h3 class="text-lg leading-none font-medium">{{ slotProps.data.fullName }}</h3>

              <span class="text-sm leading-none font-light">{{ slotProps.data.position }}</span>
            </div>
          </div>

          <p class="testimonial-text text-sm leading-[22px] text-left">{{ slotProps.data.testimonial }}</p>
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
.p-avatar-lg {
  width: 50px;
  height: 50px;
}

.testimonial-text::before,
.testimonial-text::after {
  content: '"';
}
</style>
