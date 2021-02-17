import 'babel-polyfill'
const path = require('path');
const thisPath = path.resolve(__dirname, '/javascript')

import Vue from 'vue'
import Vuex from 'vuex'
import Index from  "./src/planing/pages/Index"

import {
  planing
} from './src/planing/store/'

Vue.use(Vuex)

const store = new Vuex.Store({
  ...planing
  //  modules: {
  //    planing:planing
  //  }
})

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#index',
    store,
    render: h => h(Index)
  }).$mount()
  document.body.appendChild(app.$el)

  // console.log(app)
})