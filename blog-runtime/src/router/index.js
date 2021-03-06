import Vue from 'vue'
import Router from 'vue-router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import viewBlog from '../components/viewBlog'
import addBlog from '../components/addBlog'

Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    { path: '/', redirect: '/view' },
    { path: '/view', component: viewBlog },
    { path: '/add', component: addBlog }
  ]
})
