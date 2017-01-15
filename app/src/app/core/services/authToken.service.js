export default class AuthToken {
  constructor() {
    'ngInject'
    this.storage = localStorage;
    this.tokenName = 'userToken';
  }
  setToken(token) {
    this.cachedToken = token;
    this.storage.setItem(this.tokenName, token);
  }
  getToken() {
    if (this.cachedToken) return this.cachedToken;

    this.cachedToken = this.storage.getItem(this.tokenName);
    return this.cachedToken;
  }
  removeToken() {
    this.cachedToken = null;
    this.storage.removeItem(this.tokenName);
  }
  isAuthenticated() {
    return !!this.getToken();
  }
}
