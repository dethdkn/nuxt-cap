import { useNuxtApp, useRuntimeConfig } from '#app'

import type { CapConfig, CapInstance, CapWidget } from '../types/Cap'

export function useCap(config?: CapConfig, el?: CapWidget): CapInstance | undefined {
  const { $cap } = useNuxtApp()
  const { cap } = useRuntimeConfig().public

  if (!import.meta.client || !$cap) return

  const capInstance = new $cap({ apiEndpoint: cap?.apiEndpoint, ...config }, el)

  return capInstance
}
