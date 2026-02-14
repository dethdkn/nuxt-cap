import type { CapWidget } from '../types/Cap'

export function resetCap(): void {
  if (!import.meta.client) return

  const cap = document.querySelector<CapWidget>('#cap')

  cap?.reset()
}
