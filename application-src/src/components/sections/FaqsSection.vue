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
            <Tab value="services" class="grow max-w-1/3">
              <div class="truncate">
                <span class="text-sm font-medium">Services</span>
              </div>
            </Tab>

            <Tab value="projects" class="grow max-w-1/3">
              <div class="truncate">
                <span class="text-sm font-medium">Projects</span>
              </div>
            </Tab>

            <Tab value="contact" class="grow max-w-1/3">
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id omnis dolore
                      perspiciatis, delectus laudantium officia quaerat iusto porro perferendis
                      neque quo a, ea minus quis illo distinctio doloribus, sit quia.
                    </p>
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel value="1">
                  <AccordionHeader>
                    <span class="text-sm">What services do you offer?</span>
                  </AccordionHeader>

                  <AccordionContent>
                    <p class="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id omnis dolore
                      perspiciatis, delectus laudantium officia quaerat iusto porro perferendis
                      neque quo a, ea minus quis illo distinctio doloribus, sit quia.
                    </p>
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel value="2">
                  <AccordionHeader>
                    <span class="text-sm">What services do you offer?</span>
                  </AccordionHeader>

                  <AccordionContent>
                    <p class="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id omnis dolore
                      perspiciatis, delectus laudantium officia quaerat iusto porro perferendis
                      neque quo a, ea minus quis illo distinctio doloribus, sit quia.
                    </p>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
            </TabPanel>

            <TabPanel value="projects">
              <Accordion value="-1" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
                <AccordionPanel value="0">
                  <AccordionHeader>
                    <span class="text-sm">What services do you offer?</span>
                  </AccordionHeader>

                  <AccordionContent>
                    <p class="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id omnis dolore
                      perspiciatis, delectus laudantium officia quaerat iusto porro perferendis
                      neque quo a, ea minus quis illo distinctio doloribus, sit quia.
                    </p>
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel value="1">
                  <AccordionHeader>
                    <span class="text-sm">What services do you offer?</span>
                  </AccordionHeader>

                  <AccordionContent>
                    <p class="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id omnis dolore
                      perspiciatis, delectus laudantium officia quaerat iusto porro perferendis
                      neque quo a, ea minus quis illo distinctio doloribus, sit quia.
                    </p>
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel value="2">
                  <AccordionHeader>
                    <span class="text-sm">What services do you offer?</span>
                  </AccordionHeader>

                  <AccordionContent>
                    <p class="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id omnis dolore
                      perspiciatis, delectus laudantium officia quaerat iusto porro perferendis
                      neque quo a, ea minus quis illo distinctio doloribus, sit quia.
                    </p>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
            </TabPanel>

            <TabPanel value="contact">
              <Accordion value="-1" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
                <AccordionPanel value="0">
                  <AccordionHeader>
                    <span class="text-sm">Email Address</span>
                  </AccordionHeader>

                  <AccordionContent>
                    <p class="m-0 text-sm">jimmysilas17@gmail.com</p>
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel value="1">
                  <AccordionHeader>
                    <span class="text-sm">Phone number</span>
                  </AccordionHeader>

                  <AccordionContent>
                    <p class="m-0 text-sm">+254 719 773 594</p>
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel value="2">
                  <AccordionHeader>
                    <span class="text-sm">Location</span>
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
