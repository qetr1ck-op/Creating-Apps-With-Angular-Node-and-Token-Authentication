function HomeController(ngToast, api, authToken, $window) {
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

    api.loginLocal().post(user)
      .then(res => {
        ngToast.create({
          className: 'success',
          content: `User ${res.email} is successful logged`
        });
        authToken.setToken(res.token);
        this.navigateHome();
      })
      .catch(err => {
        ngToast.create({
          className: 'danger',
          content: err.data.message || err.data
        });
      })

  };
  this.signGoogle = () => {
    const iframe = {
      width: 500,
      height: 500,
      get left() {
        return ($window.outerWidth - this.width) / 2;
      },
      get top() {
        return ($window.outerHeight - this.height) / 2;
      },
      get params() {
        return `width=${this.width},height=${this.height},left=${this.left},top=${this.top}`;
      }
    };
    const googleAuthUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
    const clientId = '722126372425-n4vapov601njk8c0o6168dt5jlmh7kdr.apps.googleusercontent.com';
    googleAuthUrl.searchParams.set('response_type', 'code');
    googleAuthUrl.searchParams.set('client_id', clientId);
    googleAuthUrl.searchParams.set('redirect_uri', window.location.origin);
    googleAuthUrl.searchParams.set('scope', 'profile email');

    const iframeActive = $window.open(googleAuthUrl.toString(), '', iframe.params);

    $window.onmessage = e => {
      iframeActive.close();

      const code = e.data;

      api.loginGoogle().post({
        code,
        clientId,
        redirectUri: $window.location.origin
      })
        .then(res => {
          ngToast.create({
            className: 'success',
            content: `User ${res.displayName} is successful logged`
          });
          authToken.setToken(res.token);
          this.navigateHome();
        })
        .catch(err => {
          console.log(err)
          ngToast.create({
            className: 'danger',
            content: err.data.message
          });
        })
    }
  };
  this.navigateHome = () => { this.$router.navigate(['Home']); }
}

export default HomeController;
