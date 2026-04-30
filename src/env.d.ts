/// <reference types="vite/client" />

import type { Ref } from 'vue'

export {}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $fitScale: Ref<number>
  }
}
