import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Tarefas',
    component: import('@/views/Tarefas.vue')
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: import('@/views/Projetos.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
