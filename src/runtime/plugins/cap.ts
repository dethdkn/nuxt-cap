import { defineNuxtPlugin } from '#imports'
import type { CapClass } from '@/src/runtime/types/Cap'

import '@cap.js/widget'

declare global {
  var Cap: CapClass | undefined
}

export default defineNuxtPlugin(() => {
  const { Cap } = globalThis
  return {
    provide: {
      cap: Cap,
    },
  }
})
