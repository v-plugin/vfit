import type { Ref } from 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $fitScale: Ref<number>
  }
}
