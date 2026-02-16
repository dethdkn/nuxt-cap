import { addComponent, addImports, addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import type { NuxtModule } from '@nuxt/schema'

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    cap?: {
      apiEndpoint?: string
    }
  }
}

interface ModuleOptions {
  enabled?: boolean
  apiEndpoint?: string
}

const module: NuxtModule<ModuleOptions> = defineNuxtModule<ModuleOptions>({
  meta: { name: 'cap', configKey: 'cap', compatibility: { nuxt: '>=3.0.0' } },
  defaults: { enabled: true, apiEndpoint: '' },
  setup({ enabled, apiEndpoint }, nuxt) {
    if (!enabled) {
      return
    }

    const resolver = createResolver(import.meta.url)

    const { runtimeConfig } = nuxt.options

    runtimeConfig.public.cap ??= {}
    runtimeConfig.public.cap.apiEndpoint ??= apiEndpoint ?? ''

    addPlugin({ src: resolver.resolve('./runtime/plugins/cap'), mode: 'client' })

    addImports([
      { name: 'useCap', from: resolver.resolve('./runtime/composables/useCap') },
      { name: 'resetCap', from: resolver.resolve('./runtime/utils/resetCap') },
      { name: 'CapConfig', from: resolver.resolve('./runtime/types/Cap.d'), type: true },
      { name: 'CapInstance', from: resolver.resolve('./runtime/types/Cap.d'), type: true },
      { name: 'CapClass', from: resolver.resolve('./runtime/types/Cap.d'), type: true },
      { name: 'CapWidget', from: resolver.resolve('./runtime/types/Cap.d'), type: true },
      { name: 'CapErrorEvent', from: resolver.resolve('./runtime/types/Cap.d'), type: true },
      { name: 'CapProgressEvent', from: resolver.resolve('./runtime/types/Cap.d'), type: true },
      { name: 'CapResetEvent', from: resolver.resolve('./runtime/types/Cap.d'), type: true },
      { name: 'CapSolveEvent', from: resolver.resolve('./runtime/types/Cap.d'), type: true },
    ])

    addComponent({
      name: 'Cap',
      filePath: resolver.resolve('./runtime/components/Cap.vue'),
    })
  },
})

export default module
export type { ModuleOptions }
