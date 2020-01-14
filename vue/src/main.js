import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

new Vue({
  el: '#root',
  router,
  render: h => h(App)
})
