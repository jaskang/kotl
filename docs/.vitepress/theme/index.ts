// https://vitepress.dev/guide/custom-theme
import './style.css'
import { h } from 'vue'
import Layout from './Layout.vue'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
}
