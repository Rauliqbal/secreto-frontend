import {createRouter, createWebHistory} from 'vue-router'

import Home from '../pages/Home.vue'
import Post from '../pages/Post.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  
  {
    path: "/post",
    name: "Post",
    component: Post
  }
]

const router = createRouter({
  history : createWebHistory(),
  routes
})

export default router