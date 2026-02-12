<template>
  <div>
    <Carousel
      circular
      :value="testimonials"
      :showNavigators="false"
      :showIndicators="false"
      :numVisible="1"
      :numScroll="1"
      :autoplayInterval="3000"
    >
      <template #item="slotProps">
        <div
          class="w-full bg-zinc-100 dark:bg-zinc-900 mx-auto flex flex-col lg:grid px-6 py-12 sm:px-12 lg:px-16 gap-8 sm:py-12 lg:py-12 sm:gap-8"
        >
          <div>
            <p class="text-base text-center text-zinc-950 dark:text-zinc-50 text-balance">
             "{{ slotProps.data.testimonial }}"
            </p>
          </div>

          <div class="relative flex items-center gap-2.5 justify-center">
            <Avatar class="object-cover" shape="circle" size="large" :image="slotProps.data.imageUrl"></Avatar>

            <div>
              <p class="font-medium text-base text-zinc-800 dark:text-zinc-200">{{ slotProps.data.fullName }}</p>

              <p class="text-sm text-zinc-500 dark:text-zinc-400">{{ slotProps.data.position }}</p>
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
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/brinngco.firebasestorage.app/o/assets%2Fimages%2Ffounder-image-passport.jpeg?alt=media&token=cd50da0c-3333-4ce3-8821-dbf30c94708e',
    fullName: 'Aidah Rwahu',
    position: 'Founder, Brinng',
    testimonial:
      'Working with Silas Jimmy has been amazing. He has shown great dedication towards the Brinng project, ensuring that i get exactly what i requested.',
  },
  {
    imageUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    fullName: 'Allan Mutuku',
    position: 'Founder, Nobletrace',
    testimonial:
      'Silas is a great leader and skilled developer I would totally recommend him for projects.',
  },
])
</script>

<style scoped>
.testimonial-text::before,
.testimonial-text::after {
  content: '"';
}
</style>
