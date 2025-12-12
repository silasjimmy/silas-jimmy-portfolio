<template>
  <div class="flex flex-col gap-[30px]">
    <div class="flex flex-col gap-4">
      <h2 class="text-2xl leading-6 font-medium">Get In Touch</h2>

      <p class="text-sm leading-[22px] text-left">
        Do you have a project in mind? Feel free to reach out and discuss how we can bring it to
        life together.
      </p>
    </div>

    <div class="grid grid-cols-[1fr_1.5fr] gap-[30px]">
      <div class="bg-gray-100 flex flex-col gap-6 p-6 rounded-lg">
        <h3 class="text-[20px] leading-none font-semibold">Contact Information</h3>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg leading-none font-medium">Email Address</h4>

          <span class="text-sm leading-none font-light">jimmysilas17@gmail.com</span>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg leading-none font-medium">Mobile Number</h4>

          <span class="text-sm leading-none font-light">+254 719 773 594</span>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg leading-none font-medium">Location</h4>

          <span class="text-sm leading-none font-light">Nairobi, Kenya</span>
        </div>
      </div>

      <div class="bg-gray-100 flex flex-col gap-6 p-6 rounded-lg">
        <h3 class="text-[20px] leading-none font-semibold">Send a Direct Message</h3>

        <Form
          class="flex flex-col gap-3"
          v-slot="$form"
          :initial-values="formValues"
          :resolver="formResolver"
          @submit="onFormSubmit"
        >
          <div class="flex gap-2">
            <!-- Full name input -->
            <div class="flex flex-col gap-1 flex-1">
              <FloatLabel variant="on">
                <InputText
                  fluid
                  id="fullName"
                  name="fullName"
                  type="text"
                  size="small"
                  variant="filled"
                />

                <label for="fullName">Full Name</label>
              </FloatLabel>

              <Message
                v-if="$form.fullName?.invalid"
                severity="error"
                size="small"
                variant="simple"
              >
                {{ $form.fullName.error?.message }}
              </Message>
            </div>

            <!-- Email address input -->
            <div class="flex flex-col gap-1 flex-1">
              <FloatLabel variant="on">
                <InputText
                  fluid
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  size="small"
                  variant="filled"
                />

                <label for="emailAddress">Email Address</label>
              </FloatLabel>

              <Message
                v-if="$form.emailAddress?.invalid"
                severity="error"
                size="small"
                variant="simple"
              >
                {{ $form.emailAddress.error?.message }}
              </Message>
            </div>
          </div>

          <!-- Subject input -->
          <div class="flex flex-col gap-1 flex-1">
            <FloatLabel variant="on">
              <InputText
                fluid
                id="subject"
                name="subject"
                type="text"
                size="small"
                variant="filled"
              />

              <label for="subject">Subject</label>
            </FloatLabel>

            <Message v-if="$form.subject?.invalid" severity="error" size="small" variant="simple">
              {{ $form.subject.error?.message }}
            </Message>
          </div>

          <!-- Message input -->
          <div class="flex flex-col">
            <FloatLabel variant="on">
              <Textarea
                fluid
                autoResize
                id="message"
                name="message"
                rows="3"
                cols="30"
                size="small"
                variant="filled"
              />

              <label for="message">Message</label>
            </FloatLabel>

            <Message v-if="$form.message?.invalid" severity="error" size="small" variant="simple">
              {{ $form.message.error?.message }}
            </Message>
          </div>

          <div class="text-center">
            <Button type="submit" size="small" label="Submit" icon="pi pi-send" iconPos="right" />
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Form } from '@primevue/forms'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Message from 'primevue/message'
import Button from 'primevue/button'
import Textarea from 'primevue/textarea'
import { reactive, ref } from 'vue'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { z } from 'zod'

const formValues = reactive({
  fullName: '',
  emailAddress: '',
  subject: '',
  message: '',
})

const formResolver = ref(
  zodResolver(
    z.object({
      fullName: z.string().min(1, { message: 'Your full name is required!' }),
      emailAddress: z.email({ message: 'Invalid email address!' }),
      subject: z.string().min(1, { message: 'The subject is required!' }),
      message: z.string().min(1, { message: 'The message is required!' }),
    }),
  ),
)

async function onFormSubmit(e: any) {
  const { valid, values } = e

  if (valid) {
    // Handle form submission logic here
    console.log('Form submitted successfully:', values)
  }
}
</script>

<style scoped></style>
