import Vue from "vue"
import Router from "vue-router"

const Home = () => import('./pages/Home')
const About = () => import('./pages/About')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "首页",
      component: Home
    },
    {
      path: "/about",
      name: "关于",
      component: About
    }
  ]
})
