import { defineNuxtPlugin } from '#imports'

import type { CapClass } from '../types/Cap'

import '@cap.js/widget'

declare global {
  var Cap: CapClass
}

export default defineNuxtPlugin(() => {
  const { Cap } = globalThis
  return {
    provide: {
      cap: Cap,
    },
  }
})
