'use strict';
import * as Api from './services/api.service';
import * as AuthToken from './services/authToken.service';
import * as authGoogle from './config/authGoogle';

const shared = angular.module('core.shared', [])
  .service('api', Api)
  .service('authToken', AuthToken)
  .run(authGoogle);

require('./directives/validation-test/validation-test.directive')(shared);

require('./services/constants')(shared);
require('./services/resolver.provider')(shared);

export default shared;
