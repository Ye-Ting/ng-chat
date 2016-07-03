/**
 * Created by yeting on 16/6/26.
 */

//const parts = [
//  {
//    id: 'm_1',
//    inboxId: 'all',
//    conversationId: 'c_1',
//    people: { id: '1', name: 'yeting' },
//    text: 'Hey Jing, want to give a Flux talk at ForwardJS?',
//    timestamp: Date.now() - 99999,
//  },
//  {
//    id: 'm_2',
//    inboxId: 'all',
//    conversationId: 'c_1',
//    people: { id: '1', name: 'yeting' },
//    text: 'Seems like a pretty cool conference.',
//    timestamp: Date.now() - 89999,
//  },
//  {
//    id: 'm_3',
//    inboxId: 'all',
//    conversationId: 'c_2',
//    people: { id: '2', name: 'Jing' },
//    text: 'Sounds good.  Will they be serving dessert?',
//    timestamp: Date.now() - 79999,
//  },
//  {
//    id: 'm_4',
//    inboxId: 'unAssign',
//    conversationId: 'c_3',
//    people: { id: '1', name: 'yeting' },
//    text: 'Hey Dave, want to get a beer after the conference?',
//    timestamp: Date.now() - 69999,
//  },
//  {
//    id: 'm_5',
//    inboxId: 'unAssign',
//    conversationId: 'c_3',
//    people: { id: '3', name: 'Dave' },
//    text: 'Totally!  Meet you at the hotel bar.',
//    timestamp: Date.now() - 59999,
//  },
//  {
//    id: 'm_6',
//    inboxId: 'yeting',
//    conversationId: 'c_4',
//    people: { id: '1', name: 'yeting' },
//    text: 'Hey Brian, are you going to be talking about functional stuff?',
//    timestamp: Date.now() - 49999,
//  },
//  {
//    id: 'm_7',
//    inboxId: 'yeting',
//    conversationId: 'c_4',
//    people: { id: '4', name: 'Brian' },
//    text: 'At ForwardJS?  Yeah, of course.  See you there!',
//    timestamp: Date.now() - 39999,
//  },
//];

class BaseService {

  constructor($timeout) {
    this.$timeout = $timeout;
  }

  all() {
    return this.$timeout(
      () => this.data,
      100
    );
  }

  get(id) {
    return this.$timeout(
      () => this.data.find(item => item.id === id),
      100
    );
  }
}

class PeopleService extends BaseService {

  constructor($timeout) {
    super($timeout);

    this.data = [
      { id: '1', name: 'yeting' },
      { id: '2', name: 'Jing' },
      { id: '3', name: 'Dave' },
    ];
  }

}

class InboxService extends BaseService {

  constructor($timeout) {
    super($timeout);

    this.data = [
      {
        id: 'all',
        conversations: [],
      }, {
        id: 'unAssign',
        conversations: [],
      }, {
        id: 'yeting',
        conversations: [],
      },
    ];
  }
}

class ConversationService extends BaseService {

  constructor($timeout) {
    super($timeout);
    this.data = [
      {
        id: '1',
        people: { id: '1', name: 'yeting' },
        part: [
          {
            body: 'Hey Jing, want to give a Flux talk at ForwardJS?',
          },
          {
            body: 'Seems like a pretty cool conference.',
          },
        ],
      }, {
        id: '2',
        people: { id: '2', name: 'Jing' },
        part: [
          {
            body: 'Sounds good.  Will they be serving dessert?',
          },
          {
            body: 'Hey Dave, want to get a beer after the conference?',
          },
        ],
      }, {
        id: '3',
        people: { id: '2', name: 'Jing' },
        part: [
          {
            body: 'Totally!  Meet you at the hotel bar.',
          },
          {
            body: 'yoyoyoyo',
          },
        ],
      }, {
        id: '4',
        people: { id: '3', name: 'Dave' },
        part: [
          {
            body: 'Hey Brian, are you going to be talking about functional stuff?',
          },
          {
            body: 'At ForwardJS?  Yeah, of course.  See you there!',
          },
        ],
      },
    ];
  }

  searchForInbox(inboxId) {
    let inboxCon = [];
    let conversations = this.data;

    switch (inboxId) {
      case 'unAssign':
        inboxCon = [conversations[0], conversations[1]];
        break;
      case 'yeting':
        inboxCon = [conversations[2], conversations[3]];
        break;
      case 'all':
        inboxCon = conversations;
        break;
      default:
        inboxCon = [];
        break;
    }

    return this.$timeout(() => inboxCon, 100);
  }

}


import { ngModule } from '../index.module';
ngModule
  .service('PeopleService', PeopleService)
  .service('ConversationService', ConversationService)
  .service('InboxService', InboxService);

