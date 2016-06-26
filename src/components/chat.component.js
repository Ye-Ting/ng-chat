/**
 * Created by yeting on 16/6/25.
 */

const template = `
this is inboxes list
<ul class="inbox">
  <li ng-repeat="(key,value) in vm.inboxes" ng-click="vm.switchInbox(key)">
    {{ key }} {{ value }}
  </li>
</ul>

<hr>
this is conversations list
<inbox inbox="vm.getInbox()"
switch-conversation="vm.switchConversation(vm.currentInboxId, conversationId)"></inbox>

<hr>
this is conversation Detail
<conversation conversation="vm.getConversation()"></conversation>

<hr>
this is info panel
<info people="vm.getPeople()"></info>
`;

class controller {
  constructor($timeout) {
    this.$timeout = $timeout;
    //this.hello = '';

    this.onInit();
  }

  onInit() {
    this.getInboxDate()
      .then(res => {
        this.inboxes = res;
      });
  }

  getInboxDate() {
    return this.$timeout(() => ({
      all: {
        conversations: [
          {
            people: {
              name: 'yeting1',
            },
            part: [
              {
                body: 'hello',
              },
              {
                body: 'hello 2',
              },
            ],
          }, {
            people: {
              name: 'yeting2',
            },
            part: [
              {
                body: 'hello 3',
              },
              {
                body: 'hello 4',
              },
            ],
          },
        ],
      },
      unAssign: {
        conversations: [
          {
            people: {
              name: 'yeting3',
            },
            part: [
              {
                body: 'hello 3',
              },
              {
                body: 'hello 4',
              },
            ],
          },
        ],
      },
    }), 100);
  }

  switchInbox(inboxId) {
    this.currentInboxId = inboxId;
    this.conversationIndex = 0;
  }

  switchConversation(inboxId, conversationId) {
    this.currentInboxId = inboxId;
    this.conversationIndex = conversationId;
  }

  getInbox() {
    return this.currentInboxId ? this.inboxes[this.currentInboxId] : null;
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
  bindings: {},
  template,
  controller,
  controllerAs: 'vm',
};

import { ngModule } from './../index.module.js';

ngModule.component('chat', component);

