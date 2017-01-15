import * as tmpl from './register.html'
import * as ctrl from './register.ctrl'
import './form.css'

export default {
  bindings: { $router: '<' },
  templateUrl: tmpl,
  controller: ctrl
}
