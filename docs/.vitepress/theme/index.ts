import './styles/index.css'

import { type Theme } from 'vitepress'

import VPApp from './components/VPApp.vue'
import { withConfigProvider } from './composables/config'

export default { Layout: withConfigProvider(VPApp) } satisfies Theme
