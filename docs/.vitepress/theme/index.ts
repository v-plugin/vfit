import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Announcement from './components/Announcement.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(Announcement)
    })
  }
}
