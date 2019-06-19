import Vue from 'vue'
import Router from 'vue-router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import app from '../App'
import viewBlog from '../components/viewBlog'
import addBlog from '../components/addBlog'

Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    { path: '/', component: app },
    { path: '/view', component: viewBlog },
    { path: '/add', component: addBlog }
  ]
})
