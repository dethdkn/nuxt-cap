## 🚀 Setup

Install `nuxt-cap` dependency to your project:

```sh
npx nuxt module add nuxt-cap
```

Or manually

1. Install with your favorite package manager:
   - **bun** : `bun add nuxt-cap`
   - npm : `npm i nuxt-cap`
   - pnpm : `pnpm add nuxt-cap`
   - yarn : `yarn add nuxt-cap`

2. Add it to your `modules` section in your `nuxt.config`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-cap'],
  cap: {
    // ...configs
  },
})
```
