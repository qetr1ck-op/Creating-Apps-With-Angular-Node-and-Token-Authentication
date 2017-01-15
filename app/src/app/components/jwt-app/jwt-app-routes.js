export default [
  { path: '/', component: 'home', name: 'Home' },
  { path: '/register', component: 'register', name: 'Register' },
  { path: '/login', component: 'login', name: 'Login' },
  { path: '/logout', component: 'logout', name: 'Logout' },
  { path: '/jobs', component: 'jobs', name: 'Jobs' },
  { path: '/**', redirectTo: ['Home'] },
];
