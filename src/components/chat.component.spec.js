/**
 * Created by yeting on 16/6/25.
 */

import './chat.component.js';

describe('component: chat', () => {
  let component;
  let $componentController;

  beforeEach(angular.mock.module('ngChat'));

  beforeEach(angular.mock.inject((_$componentController_) => {
    $componentController = _$componentController_;
  }));

  it('switch inbox', () => {
    // Here we are passing actual bindings to the component
    const inboxes = {
      all: {
        conversations: [
          {
            people: {
              name: 'yeting',
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
              name: 'yeting',
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
              name: 'yeting',
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
    };

    component = $componentController('chat',
      null
    );

    // mock data
    component.inboxes = inboxes;
    component.switchInbox('unAssign');

    let inbox = component.inboxes.unAssign;
    expect(component.getInbox()).toEqual(inbox);
    expect(component.getConversation()).toBe(inbox.conversations[0]);
  });

  it('switch conversation', () => {
    // Here we are passing actual bindings to the component
    const inboxes = {
      all: {
        conversations: [
          {
            people: {
              name: 'yeting',
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
              name: 'yeting',
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
              name: 'yeting',
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
    };

    component = $componentController('chat',
      null
    );

    // mock data
    component.inboxes = inboxes;
    component.switchConversation('all', 1);
    const inbox = inboxes.all;
    expect(component.getInbox()).toEqual(inbox);
    expect(component.getConversation()).toBe(inbox.conversations[1]);
  });
  //
  //it('should call the onDelete binding when a hero is deleted', function() {
  //  var deleteSpy = jasmine.createSpy('deleteSpy');
  //  component = $componentController('heroDetail',
  //    null,
  //    { hero: hero, onDelete: deleteSpy }
  //  );
  //
  //  component.onDelete({ hero: component.hero });
  //  expect(deleteSpy).toHaveBeenCalledWith({ hero: component.hero });
  //});

});
