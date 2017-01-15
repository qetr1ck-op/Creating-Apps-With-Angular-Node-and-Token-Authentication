function HomeController(authToken) {
  'ngInject';

  this.$routerOnActivate = () => {
    authToken.removeToken();
    this.$router.navigate(['Home'])
  }
}

export default HomeController;
