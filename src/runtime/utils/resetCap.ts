import type { CapWidget } from '@cap.js/widget'

export function resetCap(): void {
  if (!import.meta.client) return

  const cap = document.querySelector<CapWidget>('#cap')

  cap?.reset()
}
