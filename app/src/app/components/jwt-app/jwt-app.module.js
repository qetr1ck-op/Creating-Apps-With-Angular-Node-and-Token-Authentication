import * as jwtAppComponent from './jwt-app.component';

const jwtAppModule = angular.module('jwt-app-module', [
  require('./../pages/pages.module').name,
])
  .component('jwtApp', jwtAppComponent)
  .run(() => console.log('jwt-app run'));

export default jwtAppModule;