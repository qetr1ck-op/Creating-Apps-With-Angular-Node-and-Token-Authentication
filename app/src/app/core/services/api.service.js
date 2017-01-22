export default class Api {
  constructor(Restangular, authToken, REST) {
    'ngInject'
    this.restangular = Restangular
      .withConfig(function(config) {
        config.setBaseUrl(REST.uri)
      })
      .addFullRequestInterceptor((element, operation, route, url, headers, params, httpConfig) => {
        let token = {};
        if (authToken.isAuthenticated()) {
          token.Authorization = `Bearer ${authToken.getToken()}`
        }
        return {
          element, params, httpConfig,
          headers: Object.assign(headers, token)
        };
      });
  }
  register() {
    return this.restangular.service('register');
  }
  login() {
    return this.restangular.all('login');
  }
  loginLocal() {
    return this.login().all('local');
  }
  loginGoogle() {
    return this.login().all('google');
  }
  jobs() {
    return this.restangular.service('jobs');
  }
}