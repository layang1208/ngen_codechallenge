import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '../views/MovieDetail.vue'
import TopRated from '../views/TopRated.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/topRated',
    name: 'Top Rated Movie Page',
    component: TopRated,
  },
  {
    path: '/movies/:movieId',
    name: 'MovieDetail',
    component: MovieDetail,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
