
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/menu', component: () => import('pages/menu.vue') },
      { path: '/reservation', component: () => import('pages/reservation.vue') },
      { path: '/contact', component: () => import('pages/contact.vue') },
      { path: '/gallery', component: () => import('pages/gallery.vue') },
      { path: '/Developers', component: () => import('pages/developer.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
