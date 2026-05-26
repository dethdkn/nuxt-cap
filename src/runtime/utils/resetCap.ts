import type { CapWidget } from '@/src/runtime/types/Cap'

export function resetCap(): void {
  if (!import.meta.client) return

  const cap = document.querySelector<CapWidget>('#cap')

  cap?.reset()
}
