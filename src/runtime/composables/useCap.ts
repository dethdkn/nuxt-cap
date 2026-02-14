import { useNuxtApp, useRuntimeConfig } from '#app'
import type { Cap, CapConfig, CapWidget } from '@cap.js/widget'

export function useCap(config?: CapConfig, el?: CapWidget): Cap | undefined {
  const { $cap } = useNuxtApp()
  const { cap } = useRuntimeConfig().public

  if (!import.meta.client || !$cap) return

  const capInstance = new $cap({ apiEndpoint: cap?.apiEndpoint, ...config }, el)

  return capInstance
}
