import { defineNuxtPlugin } from '#imports'
import type CapClass from '@cap.js/widget'

import '@cap.js/widget'

declare global {
  var Cap: typeof CapClass
}

export default defineNuxtPlugin(() => {
  const { Cap } = globalThis
  return {
    provide: {
      cap: Cap,
    },
  }
})
