<template>
  <div class="pt-18 sm:pt-24 lg:pt-32">
    <div class="w-full mx-auto px-4 flex flex-col gap-16 mb-16 sm:px-6 lg:px-8">
      <div class="text-center">
        <!-- Section header -->
        <div>
          <div class="mb-4 flex items-center justify-center">
            <Image unstyled class="rounded-full ring-1 ring-zinc-200 p-0.5 dark:ring-zinc-500">
              <template #image>
                <img
                  class="rounded-full size-20"
                  src="/images/silas-jimmy-headshot.jpg"
                  alt="Silas Jimmy Headshot"
                />
              </template>
            </Image>
          </div>

          <h1
            class="tracking-tight font-bold text-pretty text-3xl text-shadow-md mb-3 max-w-lg mx-auto sm:text-4xl lg:text-5xl"
          >
            Hey, I'm Silas Jimmy
          </h1>

          <h2
            class="tracking-tight font-semibold text-pretty text-xl text-shadow-md max-w-lg mx-auto sm:text-2xl lg:text-3xl"
          >
            Software Engineer & AWS Solutions Architect
          </h2>

          <p class="text-md mx-auto max-w-2xl text-balance mt-6 text-muted-color">
            I help businesses and organizations develop and deploy scalable, user-center products in
            the cloud.
          </p>
        </div>

        <!-- Section footer -->
        <div class="mt-8">
          <div class="flex flex-wrap gap-x-6 gap-y-3 flex-col justify-center items-center">
            <div>
              <Button
                as="router-link"
                variant="text"
                to="/"
                class="rouded-md inline-flex items-center font-medium text-sm text-green-500 gap-2"
              >
                <div class="relative flex items-center justify-center h-2 w-2">
                  <div
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
                  ></div>
                  <div class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></div>
                </div>

                <span>Available for work</span>
              </Button>
            </div>

            <div class="inline-flex gap-x-2 mt-2">
              <Button
                rounded
                as="a"
                href="https://www.linkedin.com/in/silasjimmy/"
                target="_blank"
                rel="noopener"
                icon="pi pi-linkedin"
                variant="text"
                severity="contrast"
              ></Button>

              <Button
                rounded
                as="a"
                href="https://x.com/_silasjimmy_"
                target="_blank"
                rel="noopener"
                icon="pi pi-twitter"
                variant="text"
                severity="contrast"
              ></Button>

              <Button
                rounded
                as="a"
                href="https://github.com/silasjimmy"
                target="_blank"
                rel="noopener"
                icon="pi pi-github"
                variant="text"
                severity="contrast"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <autoscroll-gallery></autoscroll-gallery>
  </div>
</template>

<script setup lang="ts">
import AutoscrollGallery from '../gallery/AutoscrollGallery.vue'
</script>

<style scoped></style>
