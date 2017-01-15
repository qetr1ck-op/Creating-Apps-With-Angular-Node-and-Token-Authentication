import * as validateEqualsDirective from './components/validate-equals/validate-equals.directive';

export default angular.module('index.components', [
	require('./components/jwt-app/jwt-app.module').name,
	require('./components/footer/footer.module').name,
	require('./components/nav/nav.module').name
])
  .directive('validateEquals', validateEqualsDirective);
