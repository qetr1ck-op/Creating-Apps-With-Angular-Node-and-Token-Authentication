function jwtAppController($scope, authToken) {
  'ngInject';
  /*this.$onInit = () => {
    this.isAuthenticated = authToken.isAuthenticated();
    $scope.$watch(() => {
      return authToken.isAuthenticated();
    },(newVal) => {
      this.isAuthenticated = newVal;
    });
  }*/
  this.$doCheck = () => {
    if (this.isAuthenticated !== authToken.isAuthenticated())
      this.isAuthenticated = authToken.isAuthenticated();
  }
}

export default jwtAppController;