<template>
  <div class="border">
    <h1 class="text-2xl font-medium mb-2">Expertise</h1>

    <div class="grid grid-cols-2 gap-4">
      <div class="">
        <Card>
          <template #title>
            <h1 class="font-bold">Simple Card</h1>
          </template>

          <template #content>
            <div>
              <h2 class="mb-2">Python</h2>
              <ProgressBar :value="50"></ProgressBar>
            </div>
          </template>
        </Card>
      </div>

      <div class="">
        <Card>
          <template #title>
            <h1 class="font-bold">Simple Card</h1>
          </template>

          <template #content>
            <div>
              <h2 class="mb-2">Python</h2>
              <ProgressBar :value="50"></ProgressBar>
            </div>
          </template>
        </Card>
      </div>

      <div class="">
        <Card>
          <template #title>
            <h1 class="font-bold">Simple Card</h1>
          </template>

          <template #content>
            <div>
              <h2 class="mb-2">Python</h2>
              <ProgressBar :value="50"></ProgressBar>
            </div>
          </template>
        </Card>
      </div>

      <div class="">
        <Card>
          <template #title>
            <h1 class="font-bold">Simple Card</h1>
          </template>

          <template #content>
            <div>
              <h2 class="mb-2">Python</h2>
              <ProgressBar :value="50"></ProgressBar>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import ProgressBar from 'primevue/progressbar';
</script>

<style scoped></style>
