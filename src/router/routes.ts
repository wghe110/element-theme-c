export default [
  {
    path: '/',
    redirect: 'button',
    component: () => import('/src/layout/index.vue'),
    children: [
      {
        path: 'button',
        component: () => import('/src/views/button.vue'),
      },
      {
        path: 'checkbox',
        component: () => import('/src/views/checkbox.vue'),
      }
    ]
  }
]