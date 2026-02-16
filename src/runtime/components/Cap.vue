<script setup lang="ts">
  import { onNuxtReady, useRuntimeConfig } from '#app'
  import { onUnmounted, ref } from 'vue'
  import type { PropType } from 'vue'
  import type {
    CapErrorEvent,
    CapProgressEvent,
    CapResetEvent,
    CapSolveEvent,
    CapWidget,
  } from '../types/Cap'

  const props = defineProps({
    workerCount: { type: Number, required: false },
    i18n: {
      type: Object as PropType<{
        verifyingLabel?: string
        initialState?: string
        solvedLabel?: string
        errorLabel?: string
        wasmDisabled?: string
        verifyAriaLabel?: string
        verifyingAriaLabel?: string
        verifiedAriaLabel?: string
        errorAriaLabel?: string
      }>,
      required: false,
    },
  })

  const emit = defineEmits<{
    (event: 'solve', cap: CapSolveEvent): void
    (event: 'error', cap: CapErrorEvent): void
    (event: 'reset', cap: CapResetEvent): void
    (event: 'progress', cap: CapProgressEvent): void
  }>()

  const { cap } = useRuntimeConfig().public

  const capEl = ref<CapWidget>()

  function solve(event: CapSolveEvent): void {
    emit('solve', event)
  }
  function error(event: CapErrorEvent): void {
    emit('error', event)
  }
  function reset(event: CapResetEvent): void {
    emit('reset', event)
  }
  function progress(event: CapProgressEvent): void {
    emit('progress', event)
  }

  onNuxtReady(() => {
    if (!cap?.apiEndpoint) {
      throw new Error(
        '[Cap] No API endpoint provided. Please set the "cap.apiEndpoint" runtime config or provide it in nuxt config.',
      )
    }

    const el = capEl.value
    if (!el) return

    el.addEventListener('solve', solve)
    el.addEventListener('error', error)
    el.addEventListener('reset', reset)
    el.addEventListener('progress', progress)
  })

  onUnmounted(() => {
    const el = capEl.value
    if (!el) return

    el.removeEventListener('solve', solve)
    el.removeEventListener('error', error)
    el.removeEventListener('reset', reset)
    el.removeEventListener('progress', progress)
  })
</script>

<template>
  <component
    is="cap-widget"
    ref="capEl"
    id="cap"
    :data-cap-api-endpoint="cap?.apiEndpoint"
    :data-cap-worker-count="workerCount"
    :data-cap-i18n-verifying-label="i18n?.verifyingLabel"
    :data-cap-i18n-initial-state="i18n?.initialState"
    :data-cap-i18n-solved-label="i18n?.solvedLabel"
    :data-cap-i18n-error-label="i18n?.errorLabel"
    :data-cap-i18n-wasm-disabled="i18n?.wasmDisabled"
    :data-cap-verify-aria-label="i18n?.verifyAriaLabel"
    :data-cap-verifying-aria-label="i18n?.verifyingAriaLabel"
    :data-cap-verified-aria-label="i18n?.verifiedAriaLabel"
    :data-cap-error-aria-label="i18n?.errorAriaLabel" />
</template>
