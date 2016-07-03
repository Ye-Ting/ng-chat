/**
 * Created by yeting on 16/6/26.
 */
const template = `
<div class="part" ng-repeat="part in vm.conversation.part">
  <div class="avatar">
    <img src="https://dn-daocom-uploads.qbox.me/image/png/deaa3f46-8a43-4df2-b631-415cd865003b.png" alt="">
  </div>
  <div class="content">
    <div class="bubble bubble-default left">
      <div class="bubble-cont">
        <div class="plain">
          <pre ng-bind-html="part.body"></pre>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="part admin" ng-repeat="part in vm.conversation.part">
  <div class="avatar">
    <img src="https://dn-daocom-uploads.qbox.me/image/png/deaa3f46-8a43-4df2-b631-415cd865003b.png" alt="">
  </div>
  <div class="content">
    <div class="bubble bubble-primary right">
      <div class="bubble-cont">
        <div class="plain">
          <pre ng-bind-html="part.body"></pre>
          <img src="https://dn-daocom-uploads.qbox.me/image/png/deaa3f46-8a43-4df2-b631-415cd865003b.png" alt="">
        </div>
      </div>
    </div>
    <div class="meta">xxx to xxx 15 天谴</div>
  </div>
</div>
<input type="text" ng-model="vm.body">
<button ng-click="vm.addPart()"> send </button>

`;

import './part.style.scss';

class controller {

  constructor() {
    this.body = 'message';
  }

  addPart() {
    console.log(this.conversation)
    this.conversation.part.push({
      id: 'id_' + Date.now(),
      body: this.body,
    });
  }
}

const conversationComponent = {
  bindings: {
    inbox: '<',
    conversation: '<',
  },
  template,
  controller,
  controllerAs: 'vm',
};

const componentName = 'conversation';

import { ngModule } from './../index.module.js';
ngModule.component('conversation', conversationComponent);

export default componentName;
