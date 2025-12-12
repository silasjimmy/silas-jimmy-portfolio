<template>
  <main class="2xl:w-1/2 xl:w-2/3 lg:w-3/4 lg:border-x mx-auto">
    <navbar-section></navbar-section>

    <div class="pt-[200px] px-[30px]">
      <div class="flex items-center gap-[50px] mb-[100px]">
        <div class="flex flex-col gap-4">
          <h1 class="text-4xl leading-none font-bold">
            Volunter Work
          </h1>

          <p class="text-sm leading-[22px] text-left">
            Lorem ipsum dolor sit amet consectetur. Vitae tempor quam pretium facilisis volutpat
            consequat pharetra egestas imperdiet. Penatibus nullam vulputate id dolor purus amet.
            Nunc faucibus pellentesque bibendum mattis eu. Rhoncus dui sit nulla pharetra. Nisi
            habitasse.
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

      <footer-section></footer-section>
    </div>
  </main>
</template>

<script setup lang="ts">
import NavbarSection from '@/components/NavbarSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>
