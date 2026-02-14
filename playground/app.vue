<script setup lang="ts">
  // oxlint-disable no-console
  function onSolve(event: CapSolveEvent): void {
    console.log('Solved:', event)
  }

  function onError(event: CapErrorEvent): void {
    console.error('Error:', event)
  }

  function onReset(event: CapResetEvent): void {
    console.log('Reset:', event)
  }

  function onProgress(event: CapProgressEvent): void {
    console.log('Progress:', event)
  }
</script>

<template>
  <Cap @solve="onSolve" @error="onError" @reset="onReset" @progress="onProgress" />
  <button @click="resetCap()">Reset</button>
</template>
