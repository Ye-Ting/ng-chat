/**
 * Created by yeting on 16/6/26.
 */

import '../../components/data.service';
import chatComponent from '../../components/chat.component.js';
import inboxComponent from '../../components/inbox.component.js';
import conversationComponent from '../../components/conversation.component.js';
import infoComponent from '../../components/info.component.js';

import { ngModule } from '../../index.module';

const chatState = {
  name: 'chat',
  url: '/inbox',
  resolve: {
    // All the folders are fetched from the Folders service
    inboxes: (InboxService) => InboxService.all(),
  },
  // If mymessages state is directly activated, redirect the
  // transition to the child state 'mymessages.messagelist'
  redirectTo: 'chat.inbox',
  component: chatComponent,
  // Mark this state as requiring authentication.  See ../routerhooks/requiresAuth.js.
  //data: { requiresAuth: true }
};

const inboxState = {
  name: 'chat.inbox',
  url: '/:inboxId',
  params: { inboxId: 'all' },
  resolve: {
    // Fetch the current folder from the Folders service, using the folderId parameter
    inbox: (InboxService, $stateParams) => InboxService.get($stateParams.inboxId),

    // The resolved folder object (from the resolve above) is injected into this resolve
    // The list of message for the folder are fetched from the Messages service
    conversations: (ConversationService, inbox) => ConversationService.searchForInbox(inbox.id),
  },
  views: {
    // This targets the "inbox" named ui-view added to the DOM in the parent state 'chat'
    inbox: inboxComponent,
  },
};

const conversationState = {
  name: 'chat.inbox.conversation',
  url: '/conversation/:conversationId',
  resolve: {
    // Fetch the message from the Messages service using the messageId parameter
    conversation: (ConversationService, $stateParams) => ConversationService.get(
      $stateParams.conversationId),
    // Provide the component with a function it can query that returns the closest message id
    //nextMessageGetter: (MessageListUI, messages) => MessageListUI.proximalMessageId.bind(
    //  MessageListUI, messages)
    people: (PeopleService, conversation) => PeopleService.get(conversation.people.id),
  },
  views: {
    'conversation@chat': conversationComponent,
    'info@chat': infoComponent,
  },
};

// ...and register them with the $stateProvider
ngModule.config(($stateProvider) => {
  const chatStates = [chatState, inboxState, conversationState];
  chatStates.forEach(state => $stateProvider.state(state));
});
