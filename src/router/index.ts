import {createRouter, createWebHashHistory} from 'vue-router';
import Tarefas from '@/views/Tarefas.vue';
import Projetos from '@/views/Projetos.vue';

const routes = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: Projetos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
