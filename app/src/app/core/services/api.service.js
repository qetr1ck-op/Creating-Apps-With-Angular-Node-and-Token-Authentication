import extend from 'lodash/extend';

export default class Api {
  constructor(Restangular, authToken) {
    'ngInject'
    this.restangular = Restangular
      .withConfig(function(config) {
        config.setBaseUrl('http://localhost:3000');
      })
      .addFullRequestInterceptor((element, operation, route, url, headers, params, httpConfig) => {
        let token = {};
        if (authToken.isAuthenticated()) {
          token.Authorization = `Bearer ${authToken.getToken()}`
        }
        return {
          element, params, httpConfig,
          headers: extend(headers, token)
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