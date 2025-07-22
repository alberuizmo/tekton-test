import { createRouter, createWebHistory } from 'vue-router'
import PeopleListPage from '@/modules/people-list/PeopleListPage.vue'
import PeopleDetailPage from '@/modules/people-detail/PeopleDetailPage.vue'

const routes = [
  { path: '/', name: 'PeopleList', component: PeopleListPage },
  { path: '/people/:id', name: 'PeopleDetail', component: PeopleDetailPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
