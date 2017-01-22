function HomeController(authToken, $auth) {
  'ngInject';

  this.$routerOnActivate = () => {
    $auth.logout();
    this.$router.navigate(['Home'])
  }
}

export default HomeController;
