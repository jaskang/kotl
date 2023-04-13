import './styles/index.css'
import VPApp from './components/VPApp.vue'
import { type Theme } from 'vitepress'
import { withConfigProvider } from './composables/config'

export default { Layout: withConfigProvider(VPApp) } satisfies Theme
