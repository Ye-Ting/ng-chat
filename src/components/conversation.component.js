/**
 * Created by yeting on 16/6/26.
 */
const template = `
<div>
  <div ng-repeat="part in vm.conversation.part"> {{ part }}</divco>
</div>
`;

class controller {

  constructor() {
  }
}

const conversationComponent = {
  bindings: {
    conversation: '<',
  },
  template,
  controller,
  controllerAs: 'vm',
};


import { ngModule } from './../index.module.js';
ngModule.component('conversation', conversationComponent);
