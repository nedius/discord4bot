import Vue from 'vue'

const components = {
  'n-switch':   () => import('../src/components/n-switch.vue'),
  'n-guild':   () => import('../src/components/n-guild.vue'),
}

Object.entries(components).forEach(([name, component]) => Vue.component(name, component))