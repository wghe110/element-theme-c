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
      },
      {
        path: 'radio',
        component: () => import('/src/views/radio.vue'),
      },
      {
        path: 'select',
        component: () => import('/src/views/select.vue'),
      },
      {
        path: 'input',
        component: () => import('/src/views/input.vue'),
      },
      {
        path: 'form',
        component: () => import('/src/views/form.vue'),
      },
      {
        path: 'table',
        component: () => import('/src/views/table.vue'),
      },
      {
        path: 'pagination',
        component: () => import('/src/views/pagination.vue'),
      },
      {
        path: 'datePicker',
        component: () => import('/src/views/date-picker.vue'),
      },
      {
        path: 'steps',
        component: () => import('/src/views/steps.vue'),
      }
    ]
  }
]