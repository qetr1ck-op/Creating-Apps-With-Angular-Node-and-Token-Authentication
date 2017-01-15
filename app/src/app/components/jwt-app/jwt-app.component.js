import * as routes from './jwt-app-routes';
import * as tmpl from './jwt-app.tmpl.html';
import * as ctrl from './jwt-app.ctrl';

const jwtAppComponent = {
  templateUrl: tmpl,
  controller: ctrl,
  $routeConfig: routes
};

export default jwtAppComponent;