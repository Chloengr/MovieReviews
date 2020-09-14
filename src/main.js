import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import SearchPage from './components/SearchPage.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomePage },
  { path: '/searching', component: SearchPage},
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
