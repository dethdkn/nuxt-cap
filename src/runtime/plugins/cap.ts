import { defineNuxtPlugin } from '#imports'
import Cap from '@cap.js/widget'

export default defineNuxtPlugin(() => ({
  provide: {
    cap: Cap,
  },
}))
