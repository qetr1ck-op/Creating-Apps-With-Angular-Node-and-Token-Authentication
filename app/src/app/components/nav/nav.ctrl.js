export default class NavCtrl {
  constructor($auth) {
    'ngInject';
    this.$auth = $auth;
  }
  $onInit() {
    this.isAuthenticated = this.$auth.isAuthenticated;
  }
}