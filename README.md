<h1 align="center">nuxt-cap</h1>
<p align="center">🧢 Integrate Cap into your Nuxt websites/applications.</p>

<p align="center">
   <a href="https://rosa.dev.br">
      <img src="https://img.shields.io/badge/check me!-👻-F28AA9" alt="rosa.dev.br"/>
   </a>
   <a href="https://github.com/dethdkn/nuxt-cap/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/dethdkn/nuxt-cap?color=%233da639&logo=open%20source%20initiative" alt="License"/>
  </a>
   <a href="https://gitmoji.dev">
      <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67" alt="Gitmoji"/>
   </a>
</p>

## 🚀 Setup

Install `nuxt-cap` dependency to your project:

```sh
npx nuxt module add nuxt-cap
```

## ⚙️ Configuration

You can configure **nuxt-cap** in two ways:

### 1️⃣ Using `nuxt.config.ts`

Set the `apiEndpoint` directly in your Nuxt configuration:

```ts
export default defineNuxtConfig({
  cap: {
    apiEndpoint: 'https://cap.example.com/<KEY>/',
  },
})
```

---

### 2️⃣ Using an Environment Variable (Recommended)

```bash
NUXT_PUBLIC_CAP_API_ENDPOINT="https://cap.example.com/<KEY>/"
```

Because this uses **Nuxt runtimeConfig**, it supports runtime environment variables — meaning you can change the endpoint **after build time** without rebuilding your application.

## 🧩 `<Cap />` Component

This module auto-imports a component called:

```vue
<Cap />
```

---

## 📡 Emits

The component exposes four events:

- `@solve`
- `@error`
- `@reset`
- `@progress`

### Example

```vue
<script setup lang="ts">
  import type {
    CapErrorEvent,
    CapProgressEvent,
    CapResetEvent,
    CapSolveEvent,
  } from '@cap.js/widget'

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

## 👻 Invisible Mode

For invisible mode, you can use the `useCap()` composable.

It returns a Cap instance, similar to the one described in the official invisible guide:

[Guide](https://capjs.js.org/guide/invisible.html)

You can call any available Cap instance method, such as `cap.solve()`.

### Example

```vue
<script setup lang="ts">
  const cap = useCap()

  async function testCap(): Promise<void> {
    if (!cap) return

    const { token } = await cap.solve()
    console.log(token)
  }
</script>

<template>
  <button @click="testCap">Solve Invisible Cap</button>
</template>
```

This allows you to manually trigger the proof-of-work challenge without rendering the `<Cap />` checkbox widget.

## 📝 License

Copyright © 2026 [Gabriel 'DethDKN' Rosa](https://github.com/dethdkn)\
This project is under [MIT license](https://github.com/dethdkn/nuxt-cap/blob/main/LICENSE)
