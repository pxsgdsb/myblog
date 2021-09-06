import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Class from '../views/Class/Class.vue'
import About from '../views/About/About.vue'
import Article from '../views/Article/Article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Class',
    name: 'Class',
    component: Class,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/Article',
    name: 'Article',
    component: Article,
  }

]

const router = new VueRouter({
  routes
})

export default router
