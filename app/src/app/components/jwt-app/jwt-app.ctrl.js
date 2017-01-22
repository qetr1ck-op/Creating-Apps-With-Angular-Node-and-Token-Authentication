function jwtAppController(authToken) {
  'ngInject';
  this.$doCheck = () => {
    if (this.isAuthenticated !== authToken.isAuthenticated())
      this.isAuthenticated = authToken.isAuthenticated();
  }
}

export default jwtAppController;