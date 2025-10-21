<template>
  <section class="border-b skills-section">
    <h2 class="text-pretty tracking-tight text-xl font-medium text-left">Skills</h2>

    <div class="grid grid-cols-2 gap-2">
      <Card>
        <template #title>Simple Card</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
            error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis,
            culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
        </template>
      </Card>

      <Card>
        <template #title>Simple Card</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
            error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis,
            culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
        </template>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
</script>
