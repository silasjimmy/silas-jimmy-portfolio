<template>
  <div class="border flex flex-col gap-2">
    <div class="text-center">
      <Avatar
        image="https://firebasestorage.googleapis.com/v0/b/silasjimmydev.firebasestorage.app/o/images%2Favatars%2Fsilas-jimmy.jpg?alt=media&token=6b01579c-42ce-4520-b8bb-132787b86a65"
        size="xlarge"
        shape="circle"
        alt="silas jimmy"
      />
    </div>

    <div class="container m-auto flex flex-col items-center">
      <h1 class="text-3xl font-bold mb-2">Hello👋</h1>

      <h2 class="text-2xl mb-1">My name is <span>Silas Jimmy</span></h2>

      <h1 class="text-lg mb-2">I am a <span>Software Engineer</span></h1>

      <div class="w-1/2">
        <p class="text-sm text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolor pariatur est.
          Doloribus, et placeat unde id ullam neque exercitationem, nulla fugit explicabo blanditiis
          eaque accusamus voluptatibus odit esse porro.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
</script>
