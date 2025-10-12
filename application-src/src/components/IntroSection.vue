<template>
  <div class="intro-wrapper">
    <Avatar
      image="https://firebasestorage.googleapis.com/v0/b/silasjimmydev.firebasestorage.app/o/images%2Favatars%2Fsilas-jimmy.jpg?alt=media&token=6b01579c-42ce-4520-b8bb-132787b86a65"
      size="xlarge"
      shape="circle"
      alt="silas jimmy"
    />

    <h1>
      Hello, i am
      <br />
      <strong>Silas Jimmy</strong>
    </h1>

    <h2>Software Engineer</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolor pariatur est. Doloribus,
      et placeat unde id ullam neque exercitationem, nulla fugit explicabo blanditiis eaque
      accusamus voluptatibus odit esse porro.
    </p>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from 'primevue'
</script>

<style scoped>
.intro-wrapper {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  margin: 0 auto;
}
</style>
