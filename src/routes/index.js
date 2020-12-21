export const routes = [
  { path: '', name: 'IncompletedTasks', component: () => import('../views/IncompleteTasks.vue') },
  { path: '/completed', name: 'CompletedTasks', component: () => import('../views/CompletedTasks.vue') }
]
