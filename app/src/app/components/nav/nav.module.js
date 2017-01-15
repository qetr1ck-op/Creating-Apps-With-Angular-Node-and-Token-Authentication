import * as navComponent from './nav.component';
import './nav.scss';

const navModule = angular.module('nav-module', []);

navModule
  .component('navigation', navComponent);

export default navModule;
