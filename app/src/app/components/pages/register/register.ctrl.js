function HomeController(ngToast, api, $auth) {
  'ngInject';

  this.$onInit = () => {
    this.user = {};
    this.inputType = 'password';
    this.isShowPassword = false;
  }
  this.$routerOnActivate = () => {
    if ($auth.isAuthenticated())
      this.navigateHome();
  }
  this.showPasswords = () => {
    this.isShowPassword = !this.isShowPassword;
    this.inputType = this.inputType === 'text' ? 'password' : 'text';
  }
  this.signup = (form, user) => {
    if (form.$invalid) return;

    $auth.signup(user)
      .then(res => {
        ngToast.create({
          className: 'success',
          content: `User ${res.data.email} is successful saved`
        });
        $auth.setToken(res.data.token);
        this.navigateHome();
      })
      .catch(err => {
        ngToast.create({
          className: 'danger',
          content: err.message || err.data
        });
      })

  }
  this.navigateHome = () => { this.$router.navigate(['Home']); }
}

export default HomeController;
