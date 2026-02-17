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
