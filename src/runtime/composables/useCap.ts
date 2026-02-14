import { useNuxtApp, useRuntimeConfig } from '#app'
import type { Cap, CapConfig, CapWidget } from '@cap.js/widget'

export function useCap(config?: CapConfig, el?: CapWidget): Cap | undefined {
  if (!import.meta.client) return

  const { $cap } = useNuxtApp()
  const { cap } = useRuntimeConfig().public

  const capInstance = new $cap({ apiEndpoint: cap?.apiEndpoint, ...config }, el)

  return capInstance
}
