## 🪄 useCap composable

You can use the `useCap()` composable for invisible mode.

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
