<template>
  <navbar-section></navbar-section>

  <main class="2xl:w-1/2 xl:w-2/3 lg:w-3/4 lg:border-x mx-auto">
    <div class="pt-[100px] md:pt-[150px] px-[30px]">
      <div
        class="flex flex-col md:flex-row items-center gap-[30px] md:gap-[50px] mb-[50px] md:mb-[50px]"
      >
        <div class="flex flex-col gap-4">
          <h1 class="text-3xl md:text-4xl leading-none font-bold">Volunteer Work</h1>

          <p class="text-sm leading-[22px] text-left">
            It is said that with great power comes great responsibility. I have volunteered to be a
            leader in various capacities just to get the opportunity to teach, mentor and guide
            others in the tech industry. Below are a few roles that i have held as a volunteer in my
            line of work.
          </p>
        </div>

        <div>
          <div class="w-[150px] h-[200px] rounded-lg ring-2 ring-gray-200 md:rotate-4 p-0.5">
            <Image :pt="volunteerImagePt" src="images/silas-jimmy-talk.jpeg" alt="Silas Jimmy" />
          </div>
        </div>
      </div>
    </div>

    <footer-section></footer-section>
  </main>
</template>

<script setup lang="ts">
import NavbarSection from '@/components/NavbarSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import Image from 'primevue/image'

// Define image pass-through properties for the about image
const volunteerImagePt = {
  image: {
    class: 'rounded-lg',
    style: {
      height: '100%',
      width: '100%',
      'object-fit': 'cover',
    },
  },
}
</script>
