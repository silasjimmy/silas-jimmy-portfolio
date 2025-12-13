<template>
  <navbar-section></navbar-section>

  <main class="2xl:w-1/2 xl:w-2/3 lg:w-3/4 lg:border-x mx-auto">
    <div class="pt-[100px] md:pt-[150px] px-[30px]">
      <div class="flex flex-col gap-4 mb-[50px] md:mb-[100px]">
        <h1 class="text-3xl md:text-4xl leading-none font-bold">
          Building User-Centered Products Powered by Data & Machine Learning
        </h1>

        <p class="text-sm leading-[22px] text-left">
          I have worked on a variety of projects focused on creating intuitive digital experiences,
          leveraging cloud technologies to automate processes, and integrating data and machine
          learning to drive informed decision‑making.
        </p>

        <div class="flex gap-6">
          <Button label="Let's talk" size="small"></Button>

          <Button label="Send an email" size="small"></Button>
        </div>
      </div>

      <div class="flex flex-col gap-[50px]">
        <SelectButton
          fluid
          optionLabel="name"
          aria-labelledby="multiple"
          size="small"
          v-model="selectedProjectCategory"
          :options="projectCategories"
        />

        <div class="flex flex-col gap-6">
          <!-- Project card -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div class="order-2 md:order-1 flex flex-col gap-4 py-4">
              <span class="text-xs md:text-sm leading-none font-light">2025</span>

              <h4 class="text-base md:text-lg leading-none font-medium">
                NobleTrace Website Design
              </h4>

              <p class="text-sm leading-5 font-light">
                Lorem ipsum dolor sit amet consectetur. A mauris vitae nullam dignissim commodo eu.
                Proin nunc duis vel habitasse tincidunt in sem porttitor nisl. Pellentesque ipsum
                integer in viverra sed nulla nec. Placerat nulla cras ultricies et in pellentesque
                sit. Sed ut natoque tellus blandit etiam. Ante turpis odio turpis diam tellus
                faucibus. Nibh arcu lacinia at urna nunc ut felis condimentum habitasse.
              </p>

              <RouterLink to="/projects" class="text-sm font-medium leading-none">
                View project
              </RouterLink>
            </div>

            <div class="order-1 md:order-2">
              <Image
                :pt="projectImagePt"
                src="images/projects/project-image-placeholder.jpg"
                alt="Project image"
              />
            </div>
          </div>

          <!-- Project card -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div class="order-2 md:order-2 flex flex-col gap-4 py-4">
              <span class="text-xs md:text-sm leading-none font-light">2025</span>

              <h4 class="text-base md:text-lg leading-none font-medium">
                NobleTrace Website Design
              </h4>

              <p class="text-sm leading-5 font-light">
                Lorem ipsum dolor sit amet consectetur. A mauris vitae nullam dignissim commodo eu.
                Proin nunc duis vel habitasse tincidunt in sem porttitor nisl. Pellentesque ipsum
                integer in viverra sed nulla nec. Placerat nulla cras ultricies et in pellentesque
                sit. Sed ut natoque tellus blandit etiam. Ante turpis odio turpis diam tellus
                faucibus. Nibh arcu lacinia at urna nunc ut felis condimentum habitasse.
              </p>

              <RouterLink to="/projects" class="text-sm font-medium leading-none">
                View project
              </RouterLink>
            </div>

            <div class="order-1 md:order-1">
              <Image
                :pt="projectImagePt"
                src="images/projects/project-image-placeholder.jpg"
                alt="Project image"
              />
            </div>
          </div>
        </div>

        <Paginator :rows="10" :totalRecords="5"></Paginator>
      </div>
    </div>

    <footer-section></footer-section>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavbarSection from '@/components/NavbarSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import Button from 'primevue/button'
import Image from 'primevue/image'
import Paginator from 'primevue/paginator'
import SelectButton from 'primevue/selectbutton'
import { ref } from 'vue'

// Project categories for filtering
const projectCategories = ref([
  { name: 'UI/UX', value: 'ui-ux' },
  { name: 'Dev Ops', value: 'devops' },
  { name: 'Data', value: 'data' },
])

const selectedProjectCategory = ref(null)

// Define image pass-through properties for the project image
const projectImagePt = {
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
