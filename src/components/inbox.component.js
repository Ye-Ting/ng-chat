/**
 * Created by yeting on 16/6/26.
 */

const template = `
<ul>
  <li ng-repeat="con in vm.conversations" ui-sref=".conversation({conversationId: con.id})">
    {{ con }}
  </li>
</ul>
`;


class controller {

  constructor() {
  }
}

export const indexComponent = {
  bindings: {
    inbox: '<',
    conversations: '<',
  },
  template,
  controller,
  controllerAs: 'vm',
};

const componentName = 'inbox';
import { ngModule } from './../index.module.js';
ngModule.component(componentName, indexComponent);

export default componentName;
