/**
 * Created by yeting on 16/6/26.
 */
const template = `
this is people info
<div>
{{ vm.people }}

</div>
`;

class controller {

  constructor() {
  }
}

const component = {
  bindings: { people: '<' },
  template,
  controller,
  controllerAs: 'vm',
};

const componentName = 'info';
import { ngModule } from './../index.module.js';
ngModule.component(componentName, component);
export default componentName;
