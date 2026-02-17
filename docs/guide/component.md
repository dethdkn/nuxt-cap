## 🧩 `<Cap />` Component

This module auto-imports a component called:

```vue
<Cap />
```

## 📡 Emits

The component exposes four events:

- `@solve`
- `@error`
- `@reset`
- `@progress`

### Example

```vue
<script setup lang="ts">
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
</template>
```

## 🧱 Props

### `workerCount?: number`

Optional.

Defines how many Web Workers Cap should use to solve the proof-of-work challenge.

If not set, Cap defaults to:

```ts
navigator.hardwareConcurrency || 8
```

---

### `i18n?: object`

Optional.

Allows you to customize the widget language.

```ts
{
  verifyingLabel?: string
  initialState?: string
  solvedLabel?: string
  errorLabel?: string
  wasmDisabled?: string
  verifyAriaLabel?: string
  verifyingAriaLabel?: string
  verifiedAriaLabel?: string
  errorAriaLabel?: string
}
```

### Example

```vue
<template>
  <Cap
    :worker-count="4"
    :i18n="{
      verifyingLabel: 'Verificando...',
      solvedLabel: 'Verificado',
      errorLabel: 'Erro',
    }" />
</template>
```

## 🎨 Customizing Appearance

To customize Cap’s appearance, follow the official Cap widget customization guide:
[Customizing](https://capjs.js.org/guide/widget.html#customizing)

## 🔄 Reset

To reset the Cap widget programmatically, you can use the provided helper function:

```ts
resetCap()
```

### Example

```vue
<script setup lang="ts">
  function handleReset(): void {
    // ...anything
    resetCap()
  }
</script>

<template>
  <button @click="handleReset">Reset Cap</button>

  <Cap />
</template>
```

Calling `resetCap()` will reset the current widget state, allowing the challenge to be solved again.
