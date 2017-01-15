export default function validateEqualsDirective() {
  return {
    scope: {
      validateEquals: '<'
    },
    require: 'ngModel',
    link
  }

  function link($scope, $el, $attrs, ngModelCtrl) {
    ngModelCtrl.$validators.passportEquals = (modelView, viewValue) => {
      const value = modelView || viewValue;

      return value === $scope.validateEquals;
    }

    $scope.$watch('validateEquals', () => {
      ngModelCtrl.$validate();
    })
  }
}