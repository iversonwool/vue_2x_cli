import VueRouter from "vue-router";
import About from '../views/about'
import Home from '../views/home'

export default new VueRouter({
  mode: 'history',
  routes: [
    {path: '/about', component: About},
    {path: '/home', component: Home}
  ]
})