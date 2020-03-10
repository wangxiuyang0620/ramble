import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Main from '../views/main'
import Product from '../views/product'
import Blog from '../views/blog'
import Contact from '../views/contact.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:"/home/main",
        name:'main',
        component:Main
      },{
        path:'/home/about',
        name:"about",
        component:Main
      },{
        path:'/home/services',
        name:"services",
        component:Main
      },{
        path:'/home/pages',
        name:"pages",
        component:Product
      },{
        path:'/home/gallery',
        name:"gallery",
        component:Main
      },,{
        path:'/home/blog',
        name:"blog",
        component:Blog
      },{
        path:'/home/contact',
        name:"contact",
        component:Contact
      },{
        path:"/home",
        redirect:'/home/main'
      }]}
    
  ,{
    path:"/",
    redirect:"/home"
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
