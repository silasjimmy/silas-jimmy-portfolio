<template>
  <section class="relative isolate px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col gap-4 pb-16 sm:pb-24 lg:pb-32">
      <div>
        <h2 class="text-pretty tracking-tight text-left text-xl sm:text-xl lg:text-2xl font-medium">
          Frequently Asked Questions
        </h2>

        <p class="text-balance text-left mt-2 text-sm sm:text-md text-muted-color">
          Answers to common questions about my process, services and reaching out.
        </p>
      </div>

      <div class="flexflex-col w-full gap-4 items-center">
        <Tabs value="services">
          <TabList>
            <Tab value="services" class="grow max-w-1/3 border-b-2!">
              <div class="truncate">
                <span class="text-sm font-medium">Services</span>
              </div>
            </Tab>

            <Tab value="projects" class="grow max-w-1/3 border-b-2!">
              <div class="truncate">
                <span class="text-sm font-medium">Projects</span>
              </div>
            </Tab>

            <Tab value="contact" class="grow max-w-1/3 border-b-2!">
              <div class="truncate">
                <span class="text-sm font-medium">Contact</span>
              </div>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel value="services">
              <Accordion value="-1" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
                <AccordionPanel value="0">
                  <AccordionHeader>
                    <span class="text-sm">What services do you offer?</span>
                  </AccordionHeader>

                  <AccordionContent>
                    <p class="m-0 text-sm">
                      I provide end-to-end services for building and maintaining modern frontend and
                      backend applications in the cloud, with a strong focus on scalability,
                      performance, and user experience. My offerings cover the full lifecycle of
                      application development, using technolgy tools suited to your needs.
                    </p>
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel value="1">
                  <AccordionHeader>
                    <span class="text-sm">What is your design process like?</span>
                  </AccordionHeader>

                  <AccordionContent>
                    <p class="m-0 text-sm">
                      My design process is structured, collaborative, and iterative - built around
                      agile principles to ensure that products evolve smoothly from concept to
                      deployment while staying aligned with client goals and user needs. My process
                      typically involves stages like Discovery & Research, Ideation & Wireframing,
                      Prototyping & Design, among others.
                    </p>
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel value="2">
                  <AccordionHeader>
                    <span class="text-sm">Do you work with startups?</span>
                  </AccordionHeader>

                  <AccordionContent>
                    <p class="m-0 text-sm">
                      Absolutely! I enjoy working with startups to help shape their product vision
                      and create user-friendly interfaces from the ground up. I can adapt my process
                      to fit the fast-paced startup environment. I understand the unique challenges
                      startups face and can provide flexible solutions to help them succeed. Whether
                      it's building an MVP, iterating on designs, or scaling the product,
                    </p>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
            </TabPanel>

            <TabPanel value="projects">
              <Accordion value="-1" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
                <AccordionPanel value="0">
                  <AccordionHeader>
                    <span class="text-sm">How much does a project typically costs?</span>
                  </AccordionHeader>

                  <AccordionContent>
                    <p class="m-0 text-sm">
                      The cost of a project depends on its scope, complexity, and timeline. For a
                      basic website, costs typically range from $80 to $150. More complex projects
                      like web applications or custom software can range from $250 to $800 or more.
                      I provide detailed quotes after understanding your specific requirements.
                    </p>
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel value="1">
                  <AccordionHeader>
                    <span class="text-sm">What are your payment terms?</span>
                  </AccordionHeader>

                  <AccordionContent>
                    <p class="m-0 text-sm">
                      I generally require a 35% deposit to schedule the project and begin work, with
                      the remaining 65% due upon successfull project completion and delivery.
                      Payment details will be provided.
                    </p>
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel value="2">
                  <AccordionHeader>
                    <span class="text-sm">How long does a typical project take?</span>
                  </AccordionHeader>

                  <AccordionContent>
                    <p class="m-0 text-sm">
                      The timeline for a typical project varies depending on its scope and
                      complexity. A basic website can take 2-4 weeks, while more complex web
                      applications or custom software projects may take 2-6 months. I provide a
                      detailed timeline during the initial consultation phase.
                    </p>
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel value="3">
                  <AccordionHeader>
                    <span class="text-sm">Do you offer retainers or ongoing support??</span>
                  </AccordionHeader>

                  <AccordionContent>
                    <p class="m-0 text-sm">
                      Yes, I offer retainer packages and ongoing support for clients who need
                      continuous maintenance, updates, or enhancements to their existing projects. I
                      provide flexible retainer options tailored to your needs.
                    </p>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
            </TabPanel>

            <TabPanel value="contact">
              <Accordion value="-1" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
                <AccordionPanel value="0">
                  <AccordionHeader>
                    <div class="flex items-center gap-x-3">
                      <i class="pi pi-envelope" style="font-size: 14px"></i>

                      <span class="text-sm">Email Address</span>
                    </div>
                  </AccordionHeader>

                  <AccordionContent>
                    <p class="m-0 text-sm">jimmysilas17@gmail.com</p>
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel value="1">
                  <AccordionHeader>
                    <div class="flex items-center gap-x-3">
                      <i class="pi pi-phone" style="font-size: 14px"></i>

                      <span class="text-sm">Phone Number</span>
                    </div>
                  </AccordionHeader>

                  <AccordionContent>
                    <p class="m-0 text-sm">+254 719 773 594</p>
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel value="2">
                  <AccordionHeader>
                    <div class="flex items-center gap-x-3">
                      <i class="pi pi-map-marker" style="font-size: 14px"></i>

                      <span class="text-sm">Location</span>
                    </div>
                  </AccordionHeader>

                  <AccordionContent>
                    <p class="m-0 text-sm">Nairobi, Kenya</p>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
