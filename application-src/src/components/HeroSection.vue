<template>
  <section class="hero-section pt-30 border-b">
    <div class="hero-section--wrapper">
      <div class="text-center">
        <Avatar size="xlarge" shape="circle" image="../assets/images/silas-jimmy.jpg"></Avatar>
      </div>

      <h1
        class="text-center tracking-tight font-bold text-pretty text-3xl text-shadow-md max-w-lg mx-auto"
      >
        Hello, I'm Silas Jimmy Solutions Architect
      </h1>

      <p class="text-center text-md max-w-2xl text-muted-color text-balance mx-auto">
        I build software solutions that blend creativity with user needs.
      </p>

      <div class="flex justify-center gap-6">
        <Button variant="text" size="small" label="g"></Button>
        <Button variant="text" size="small" label="l"></Button>
        <Button variant="text" size="small" label="t"></Button>
      </div>

      <div class="text-center">
        <Button variant="text" size="small" label="Available for work"></Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
</script>
