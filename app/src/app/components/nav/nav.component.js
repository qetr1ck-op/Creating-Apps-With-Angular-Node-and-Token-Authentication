import * as tmpl from './nav.html';
import * as ctrl from './nav.ctrl';

export default {
  bindings: {
    isAuthenticated: '<'
  },
  templateUrl: tmpl,
  controller: ctrl
};
