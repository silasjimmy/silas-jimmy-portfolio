<template>
  <navbar-section></navbar-section>

  <main class="2xl:w-1/2 xl:w-2/3 lg:w-3/4 lg:border-x mx-auto">
    <div class="pt-[200px] px-[30px]">
      <div class="flex items-center gap-[50px] mb-[100px]">
        <div class="flex flex-col gap-4">
          <h1 class="text-4xl leading-none font-bold">About Me</h1>

          <p class="text-sm leading-[22px] text-left">
            I am a problem solver who thrives in environments where curiosity and creativity
            intersect. Whether developing software, designing architectures, or shaping user
            experiences, I am driven to push beyond boundaries and deliver meaningful impact.
          </p>
        </div>

        <div>
          <div class="w-[150px] h-[200px] rounded-lg ring-2 ring-gray-200 rotate-4 p-0.5">
            <Image :pt="aboutImagePt" src="images/silas-jimmy-half.jpg" alt="Silas Jimmy" />
          </div>
        </div>
      </div>

      <div class="mb-[30px]">
        <p class="text-sm leading-[22px] text-left">
          Hi, my name is Silas Jimmy. I am a Data Scientist, Software Engineer, and Solutions
          Architect based in Nairobi. For the past three years, I have been exploring how to design,
          develop, and maintain innovative software products. My journey began while pursuing a
          degree in Computer Science, where I discovered my passion for creating impactful solutions
          through technology. I set out to acquire interdisciplinary skills across the entire
          software development process to fulfill this vision. Since then, I have earned several
          certificates from reputable institutions, including Udacity and the African Leadership
          Experience (ALX).
        </p>
      </div>

      <div class="mb-[30px]">
        <h3 class="mb-4 text-[20px] leading-none font-semibold">Skills</h3>

        <p class="text-sm leading-[22px] text-left">
          I possess a diverse range of skills that enable me to contribute effectively in any team,
          business, or organization working with software products. My expertise in UI/UX design
          allows me to craft intuitive digital experiences that address users’ needs, motivations,
          and pain points. As a software engineer, I focus on ensuring that products are implemented
          efficiently and aligned with both user requirements and business objectives. My knowledge
          of cloud technologies enables me to deliver scalable solutions that reach target users
          while supporting organizational goals. As a data scientist, I analyze data and build
          machine learning models that empower stakeholders to make informed, data-driven decisions.
        </p>
      </div>

      <div class="mb-[30px]">
        <h3 class="mb-4 text-[20px] leading-none font-semibold">Motivation</h3>

        <p class="text-sm leading-[22px] text-left">
          In tech, many people will advise you to learn one skill and master it. While that approach
          has its benefits, I believe that to successfully build a useful and innovative software
          solution, you need more than just one skill. It is not enough to simply have an idea for
          solving a problem—you must also be able to visualize the solution and assess its
          viability. This involves considering every stage: from design, tools, and development
          processes to deployment strategies and maintenance plans. By doing so, you also gain
          clarity on the kind of partners you need in a team to bring the idea to life. Some may
          think that being both a data scientist and a software engineer is counterintuitive, but my
          motivation stems from the belief that combining disciplines is one of the best ways to
          innovate. Mastery comes from solving a thousand problems.
        </p>
      </div>

      <div class="mb-[30px]">
        <h3 class="mb-4 text-[20px] leading-none font-semibold">Hobbies</h3>

        <p class="text-sm leading-[22px] text-left">
          When I am not writing code or designing architectures, you’ll often find me binge-watching
          films, cycling, honing my culinary skills, or exploring art. On occasion, I practice
          calligraphy, but my true passion lies in photography. Beyond the screen, it’s just me, my
          phone camera, and the world. Check out some of my best work (yet!) below.
        </p>
      </div>

      <footer-section></footer-section>
    </div>
  </main>
</template>

<script setup lang="ts">
import NavbarSection from '@/components/NavbarSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import Image from 'primevue/image'

// Define image pass-through properties for the about image
const aboutImagePt = {
  image: {
    class: 'rounded-lg',
    style: {
      height: '100%',
      width: '100%',
      'object-fit': 'cover',
    },
  },
}
</script>

<style scoped>
.image {
  /* object-fit: fill; */
  border: 1px solid red;
}
</style>
