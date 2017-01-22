function HomeController(ngToast, api, authToken, $auth) {
  'ngInject';

  this.$onInit = () => {
    this.user = {};
    this.inputType = 'password';
    this.isShowPassword = false;
  }
  this.$routerOnActivate = () => {
    if (authToken.isAuthenticated())
      this.navigateHome();
  }
  this.showPasswords = () => {
    this.isShowPassword = !this.isShowPassword;
    this.inputType = this.inputType === 'text' ? 'password' : 'text';
  }
  this.login = (form, user) => {
    if (form.$invalid) return;

    $auth.login(user)
      .then(res => {
        ngToast.create({
          className: 'success',
          content: `User ${res.data.email} is successful logged`
        });
        this.navigateHome();
      })
      .catch(err => {
        ngToast.create({
          className: 'danger',
          content: err.data.message || err.data
        });
      })

  };
  this.authenticate = (provider) => {
    $auth
      .authenticate(provider)
      .then(res => {
        ngToast.create({
          className: 'success',
          content: `User ${res.data.displayName} is successful logged`
        });
        this.navigateHome();
      })
      .catch(err => {
        ngToast.create({
          className: 'danger',
          content: err.data.message
        });
      });
  }
  this.navigateHome = () => { this.$router.navigate(['Home']); }
}

export default HomeController;
