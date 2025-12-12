<template>
  <main class="lg:border-x 2xl:w-1/2 mx-auto">
    <navbar-section></navbar-section>

    <div class="pt-[200px] px-[30px]">
      <div class="flex items-center gap-[50px] mb-[100px]">
        <div class="flex flex-col gap-4">
          <h1 class="text-4xl leading-none font-bold">Latest Articles</h1>

          <p class="text-sm leading-[22px] text-left">
            Lorem ipsum dolor sit amet consectetur. Vitae tempor quam pretium facilisis volutpat
            consequat pharetra egestas imperdiet. Penatibus nullam vulputate id dolor purus amet.
            Nunc faucibus pellentesque bibendum mattis eu. Rhoncus dui sit nulla pharetra. Nisi
            habitasse.
          </p>
        </div>

        <div>
          <div class="w-[150px] h-[150px] rounded-lg ring-2 ring-gray-100 rotate-4 p-0.5">
            <div class="w-full h-full bg-gray-100 rounded-lg"></div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-[50px] mb-[100px]">
        <div class="flex items-center justify-center gap-6">
          <Button rounded label="All projects" severity="secondary" size="small" />

          <Button rounded label="UI/UX" severity="secondary" size="small" />

          <Button rounded label="DevOps" severity="secondary" size="small" />

          <Button rounded label="Data" severity="secondary" size="small" />
        </div>

        <div class="flex flex-col gap-[50px]">
          <!-- Aticle card -->
          <div class="grid grid-cols-2 gap-[30px]">
            <div>
              <div class="w-full h-full rounded-lg ring-10 ring-gray-100 -rotate-2">
                <div class="w-full h-full bg-gray-300"></div>
              </div>
            </div>

            <div class="order-1 flex flex-col gap-4 py-4">
              <span class="text-sm leading-none font-light">Jan 23, 2026</span>

              <h4 class="text-lg leading-none font-medium">
                Developing a CI/CD Pipeline from Scratch
              </h4>

              <p class="text-sm leading-5 font-light">
                Lorem ipsum dolor sit amet consectetur. A mauris vitae nullam dignissim commodo eu.
                Proin nunc duis vel habitasse tincidunt in sem porttitor nisl. Pellentesque ipsum
                integer in viverra sed nulla nec. Placerat nulla cras ultricies et in pellentesque
                sit. Sed ut natoque tellus blandit etiam. Ante turpis odio turpis diam tellus
                faucibus. Nibh arcu lacinia at urna nunc ut felis condimentum habitasse.
              </p>

              <RouterLink to="/blog" class="text-sm font-medium leading-none">
                Read more
              </RouterLink>
            </div>
          </div>

          <!-- Aticle card -->
          <div class="grid grid-cols-2 gap-[30px]">
            <div>
              <div class="w-full h-full rounded-lg ring-10 ring-gray-100 rotate-2">
                <div class="w-full h-full bg-gray-300"></div>
              </div>
            </div>

            <div class="order-1 flex flex-col gap-4 py-4">
              <span class="text-sm leading-none font-light">Jan 23, 2026</span>

              <h4 class="text-lg leading-none font-medium">
                Developing a CI/CD Pipeline from Scratch
              </h4>

              <p class="text-sm leading-5 font-light">
                Lorem ipsum dolor sit amet consectetur. A mauris vitae nullam dignissim commodo eu.
                Proin nunc duis vel habitasse tincidunt in sem porttitor nisl. Pellentesque ipsum
                integer in viverra sed nulla nec. Placerat nulla cras ultricies et in pellentesque
                sit. Sed ut natoque tellus blandit etiam. Ante turpis odio turpis diam tellus
                faucibus. Nibh arcu lacinia at urna nunc ut felis condimentum habitasse.
              </p>

              <RouterLink to="/blog" class="text-sm font-medium leading-none">
                Read more
              </RouterLink>
            </div>
          </div>

          <!-- Aticle card -->
          <div class="grid grid-cols-2 gap-[30px]">
            <div>
              <div class="w-full h-full rounded-lg ring-10 ring-gray-100 -rotate-2">
                <div class="w-full h-full bg-gray-300"></div>
              </div>
            </div>

            <div class="order-1 flex flex-col gap-4 py-4">
              <span class="text-sm leading-none font-light">Jan 23, 2026</span>

              <h4 class="text-lg leading-none font-medium">
                Developing a CI/CD Pipeline from Scratch
              </h4>

              <p class="text-sm leading-5 font-light">
                Lorem ipsum dolor sit amet consectetur. A mauris vitae nullam dignissim commodo eu.
                Proin nunc duis vel habitasse tincidunt in sem porttitor nisl. Pellentesque ipsum
                integer in viverra sed nulla nec. Placerat nulla cras ultricies et in pellentesque
                sit. Sed ut natoque tellus blandit etiam. Ante turpis odio turpis diam tellus
                faucibus. Nibh arcu lacinia at urna nunc ut felis condimentum habitasse.
              </p>

              <RouterLink to="/blog" class="text-sm font-medium leading-none">
                Read more
              </RouterLink>
            </div>
          </div>

          <!-- Aticle card -->
          <div class="grid grid-cols-2 gap-[30px]">
            <div>
              <div class="w-full h-full rounded-lg ring-10 ring-gray-100 rotate-2">
                <div class="w-full h-full bg-gray-300"></div>
              </div>
            </div>

            <div class="order-1 flex flex-col gap-4 py-4">
              <span class="text-sm leading-none font-light">Jan 23, 2026</span>

              <h4 class="text-lg leading-none font-medium">
                Developing a CI/CD Pipeline from Scratch
              </h4>

              <p class="text-sm leading-5 font-light">
                Lorem ipsum dolor sit amet consectetur. A mauris vitae nullam dignissim commodo eu.
                Proin nunc duis vel habitasse tincidunt in sem porttitor nisl. Pellentesque ipsum
                integer in viverra sed nulla nec. Placerat nulla cras ultricies et in pellentesque
                sit. Sed ut natoque tellus blandit etiam. Ante turpis odio turpis diam tellus
                faucibus. Nibh arcu lacinia at urna nunc ut felis condimentum habitasse.
              </p>

              <RouterLink to="/blog" class="text-sm font-medium leading-none">
                Read more
              </RouterLink>
            </div>
          </div>
        </div>

        <Paginator :rows="10" :totalRecords="5"></Paginator>
      </div>

      <footer-section></footer-section>
    </div>
  </main>
</template>

<script setup lang="ts">
import NavbarSection from '@/components/NavbarSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import Button from 'primevue/button'
import Paginator from 'primevue/paginator'
</script>
