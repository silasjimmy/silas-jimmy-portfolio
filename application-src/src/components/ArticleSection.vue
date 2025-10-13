<template>
  <div class="border">
    <h1 class="text-2xl font-medium mb-2">Articles</h1>

    <div class="grid">
      <div>
        <span class="text-xs text-gray-300 font-light">date</span>
        <h1 class="text-2xl font-bold mt-2 mb-0.5">title</h1>
        <p class="text-sm font-normal text-gray-300 mb-4">description</p>
        <div class="text-right">
            <Button variant="link" label="Read article" size="small" />
        </div>
      </div>

      <div>
        <span class="text-xs text-gray-300 font-light">date</span>
        <h1 class="text-2xl font-bold mt-2 mb-0.5">title</h1>
        <p class="text-sm font-normal text-gray-300 mb-4">description</p>
        <div class="text-right">
            <Button variant="link" label="Read article" size="small" />
        </div>
      </div>

      <div>
        <span class="text-xs text-gray-300 font-light">date</span>
        <h1 class="text-2xl font-bold mt-2 mb-0.5">title</h1>
        <p class="text-sm font-normal text-gray-300 mb-4">description</p>
        <div class="text-right">
            <Button variant="link" label="Read article" size="small" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
</script>

<style scoped></style>
