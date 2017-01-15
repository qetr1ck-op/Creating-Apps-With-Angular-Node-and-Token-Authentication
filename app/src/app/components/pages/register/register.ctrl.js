function HomeController(ngToast, api, authToken) {
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
  this.submit = (form, user) => {
    if (form.$invalid) return;

    api.register().post(user)
      .then(res => {
        ngToast.create({
          className: 'success',
          content: `User ${res.email} is successful saved`
        });
        authToken.setToken(res.token);
        this.navigateHome();
      })
      .catch(err => {
        ngToast.create({
          className: 'danger',
          content: err.message
        });
      })

  }
  this.navigateHome = () => { this.$router.navigate(['Home']); }
}

export default HomeController;
