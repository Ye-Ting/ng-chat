/**
 * Created by yeting on 16/6/25.
 */

import './conversation.component.js';

describe('component: conversation', () => {
  let component;
  let conversation;
  let $componentController;

  beforeEach(angular.mock.module('ngChat'));

  beforeEach(angular.mock.inject(($rootScope, _$componentController_) => {
    $componentController = _$componentController_;
    conversation = {
      people: {
        name: 'yeting',
      },
      part: [
        {
          body: 'hello',
          createAt: new Date(),
        },
        {
          body: 'hello 2',
          createAt: new Date(),
        },
      ],
    };
  }));

  it('should assign the name bindings to the inbox object', () => {
    // Here we are passing actual bindings to the component
    component = $componentController('chat',
      null,
      { conversation }
    );

    expect(component.conversation).toBe(conversation);
  });

});
