<template>
  <main class="lg:border-x 2xl:w-1/2 mx-auto">
    <navbar-section></navbar-section>

    <div class="pt-[200px] px-[30px]">
      <div class="flex items-center gap-[50px] mb-[100px]">
        <div class="flex flex-col gap-4">
          <h1 class="text-4xl leading-none font-bold">
            Building User-Centered Products Powered by Data & Machine Learning
          </h1>

          <p class="text-sm leading-[22px] text-left">
            I have worked on a variety of projects focused on creating intuitive digital
            experiences, leveraging cloud technologies to automate processes, and integrating data
            and machine learning to drive informed decision‑making.
          </p>

          <div class="flex gap-6">
            <Button label="Let's talk" size="small"></Button>

            <Button label="Send an email" size="small"></Button>
          </div>
        </div>

        <div>
          <div class="w-[150px] h-[150px] rounded-lg ring-2 ring-gray-100 rotate-4 p-0.5">
            <div class="w-full h-full bg-gray-100 rounded-lg"></div>
          </div>
        </div>
      </div>

      <div class="border">
        <div class="flex items-center justify-center gap-6">
          <Button rounded label="All projects" severity="secondary" size="small" />

          <Button rounded label="UI/UX" severity="secondary" size="small" />

          <Button rounded label="DevOps" severity="secondary" size="small" />

          <Button rounded label="Data" severity="secondary" size="small" />
        </div>

        <div class="border"></div>
      </div>

      <footer-section></footer-section>
    </div>
  </main>
</template>

<script setup lang="ts">
import NavbarSection from '@/components/NavbarSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import Button from 'primevue/button'
</script>
