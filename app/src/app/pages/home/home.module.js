'use strict';

import * as route from './home.route';

const homePageModule = angular.module('home-module', [
  'ui.router'
]);

homePageModule
    .config(route);

export default homePageModule;
