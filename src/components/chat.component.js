/**
 * Created by yeting on 16/6/25.
 */

const template = `
this is inboxes list
<ul class="inbox">
  <li style="display: inline-block" ng-repeat="(key,value) in vm.inboxes"
  ui-sref=".inbox({inboxId: value.id})">
    {{ key }} {{ value }}
  </li>
</ul>

<div  ui-view="inbox"></div>

<div class="conversation" ui-view="conversation"></div>

<hr>
this is info panel
<div ui-view="info"></div>

`;

class controller {
  constructor($timeout, PeopleService, ConversationService, InboxService) {
    this.$timeout = $timeout;
    this.PeopleService = PeopleService;
    this.ConversationService = ConversationService;
    this.InboxService = InboxService;

    //this.onInit();
  }

  //onInit() {
  //  this.InboxService.all()
  //    .then(res => {
  //      this.inboxes = res;
  //      this.inboxes.forEach(inbox => {
  //
  //        this.ConversationService.searchForInbox(inbox.id)
  //          .then(cons => {
  //            inbox.conversations = cons;
  //          })
  //
  //      })
  //    });
  //}

  switchInbox(inboxId) {
    this.currentInboxId = inboxId;
    this.conversationIndex = 0;
  }

  switchConversation(inboxId, conversationId) {
    this.currentInboxId = inboxId;
    this.conversationIndex = conversationId;
  }

  getInbox() {
    return angular.isNumber(this.currentInboxId) ? this.inboxes[this.currentInboxId] : null;
  }

  getConversation() {
    return angular.isNumber(
      this.conversationIndex) ? this.getInbox().conversations[this.conversationIndex] : null;
  }

  getPeople() {
    const con = this.getConversation();
    return con ? con.people : null;
  }
}

const component = {
  bindings: {
    inboxes: '<',
  },
  template,
  controller,
  controllerAs: 'vm',
};

const componentName = 'chat';

import { ngModule } from './../index.module.js';
import './data.service';

ngModule.component(componentName, component);

export default componentName;
