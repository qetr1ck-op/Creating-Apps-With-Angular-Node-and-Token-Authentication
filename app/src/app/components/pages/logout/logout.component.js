import * as tmpl from './logout.html'
import * as ctrl from './logout.ctrl'

export default {
  bindings: { $router: '<' },
  templateUrl: tmpl,
  controller: ctrl
}
