import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import router from './router'

import "./index.html"

import 'materialize-css/sass/materialize.scss'
import './style.sass'

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    update (state,token) {
      state.token = token;
    }
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
