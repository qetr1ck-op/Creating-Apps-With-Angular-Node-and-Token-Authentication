'use strict';

import * as config from './index.config';
import * as run from './index.run';


const App = angular.module(
  "jwt-app", [
    // plugins
    "ngSanitize",
    'ngAnimate',
    "ngMessages",
    "ngResource",
    "oc.lazyLoad",
    'ngComponentRouter',
    'ngMessages',
    'ngToast',
    'ngResource',
    'restangular',
    'wapweb.componentRouterActive',
    'satellizer',

    // core
    require("./core/core.module").name,

    // components
    require("./index.components").name,


    // pages
    /*require("./pages/home/home.module").name,
    require("./pages/register/register.module").name*/
  ]
);

App
  .config(config)
  .run(run)
  .value('$routerRootComponent', 'jwtApp')


export default App;
