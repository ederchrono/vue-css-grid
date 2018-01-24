// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Example from './Example'

import { CssGrid, CssGridItem, ViewportListener } from './css-grid'
Vue.component('css-grid', CssGrid)
Vue.component('css-grid-item', CssGridItem)
Vue.component('viewport-listener', ViewportListener)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Example },
  template: '<Example/>'
})
