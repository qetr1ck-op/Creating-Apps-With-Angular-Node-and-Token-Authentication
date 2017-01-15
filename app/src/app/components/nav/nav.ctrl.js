export default class NavCtrl {
  constructor() { }
  $onChanges(changes) {
    this.isAuthenticated = changes.isAuthenticated.currentValue;
  }
}