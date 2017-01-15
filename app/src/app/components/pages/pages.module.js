import * as jwtHomeComponent from './home/home.component'
import * as jwtJobsComponent from './jobs/jobs.component'
import * as jwtRegisterComponent from './register/register.component'
import * as jwtLoginComponent from './login/login.component'
import * as jwtLogoutomponent from './logout/logout.component'

export default angular.module('pages', [])
  .component('home', jwtHomeComponent)
  .component('jobs', jwtJobsComponent)
  .component('register', jwtRegisterComponent)
  .component('login', jwtLoginComponent)
  .component('logout', jwtLogoutomponent);