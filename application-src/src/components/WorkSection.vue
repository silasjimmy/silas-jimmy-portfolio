<template>
  <div class="border">
    <h1 class="text-2xl font-medium mb-2">Work Expereince</h1>

    <div>
      <Timeline :value="experienceData" align="alternate">
        <template #content="slotProps">
          <h1 class="font-bold mb-1">{{ slotProps.item.title }}</h1>

          <h2 class="text-sm font-light">
            {{ slotProps.item.company }}
            <span class="mx-0.5">-</span>
            {{ slotProps.item.type }}
          </h2>

          <span class="text-xs mb-2">
            {{ shortDateFormat(slotProps.item.time[0]) }}
            <span class="mx-0.5">-</span>
            {{ new Date(slotProps.item.time[1]) === new Date() ? 'Present' : shortDateFormat(slotProps.item.time[1]) }}
          </span>

          <p class="text-sm text-gray-300 font-light">{{ slotProps.item.description }}</p>
        </template>
      </Timeline>
    </div>
  </div>
</template>

<script setup lang="ts">
import Timeline from 'primevue/timeline'
import { shortDateFormat } from '@/utils/datetimeUtils'
import { ref } from 'vue'

const experienceData = ref([
    {
    time: [new Date(), new Date()],
    type: 'Full-time',
    title: 'Software Engineer',
    company: 'Freelance',
    description: 'something about the job',
  },
  {
    time: [new Date(), new Date()],
    type: 'Part-time',
    title: 'Software Engineer',
    company: 'Dema Africa',
    description: 'something about the job',
  },
  {
    time: [new Date(), new Date()],
    type: 'Contract',
    title: 'Fullstack Software Developer',
    company: 'Dema Africa',
    description: 'something about the job',
  },
])
</script>

<style scoped></style>
