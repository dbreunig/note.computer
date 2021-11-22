import Vue from 'vue'

// Vuex
import Vuex from 'vuex'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import { BootstrapVue, IconsPlugin  } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    notex: ""
  },
  mutations: {
    update (state, text) {
      state.notex = text;
    }
  },
  actions: {

  }
})

import App from './App.vue'

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
