/**
 * Created by yeting on 16/6/26.
 */

const template = `
<ul>
  <li ng-repeat="con in vm.inbox.conversations"
  ng-click="vm.switchConversation({conversationId:$index})">
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
    switchConversation: '&',
  },
  template,
  controller,
  controllerAs: 'vm',
};


import { ngModule } from './../index.module.js';
ngModule.component('inbox', indexComponent);
