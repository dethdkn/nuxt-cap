import { defineNuxtPlugin } from '#imports'
import type { Cap as CapInstance } from '@cap.js/widget'

import '@cap.js/widget'

declare global {
  var Cap: CapInstance
}

export default defineNuxtPlugin(() => {
  const { Cap } = globalThis
  return {
    provide: {
      cap: Cap,
    },
  }
})
