<template>
  <section class="hero-section pt-30 border-b">
    <div class="hero-section--wrapper">
      <div class="text-center">
        <Avatar size="xlarge" shape="circle" image="/images/silas-jimmy.jpg"></Avatar>
      </div>

      <h1
        class="text-center font-bold text-3xl"
      >
        Hello, I'm Silas Jimmy Solutions Architect
      </h1>

      <p class="text-center text-sm">
        I build software solutions that blend creativity with user needs.
      </p>

      <div class="flex justify-center gap-6">
        <Button variant="text" icon="pi pi-github"></Button>
        <Button variant="text" icon="pi pi-linkedin"></Button>
        <Button variant="text" icon="pi pi-twitter"></Button>
      </div>

      <div class="text-center">
        <Button icon="pi pi-circle-fill" variant="text" size="small" label="Available for work"></Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
</script>
