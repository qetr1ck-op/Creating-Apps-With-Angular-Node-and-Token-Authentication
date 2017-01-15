import * as tmpl from './login.html'
import * as ctrl from './login.ctrl'
import './form.css' //TODO: to component

export default {
  bindings: { $router: '<' },
  templateUrl: tmpl,
  controller: ctrl
}
