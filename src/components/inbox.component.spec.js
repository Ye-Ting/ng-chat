/**
 * Created by yeting on 16/6/25.
 */

import './chat.component.js';

describe('component: inbox', () => {
  let component;
  let scope;
  let inbox;
  let $componentController;

  beforeEach(angular.mock.module('ngChat'));

  beforeEach(angular.mock.inject(($rootScope, _$componentController_) => {
    scope = $rootScope.$new();
    $componentController = _$componentController_;
    inbox = 'all';
  }));

  //it('should assign the name bindings to the inbox object', () => {
  //  // Here we are passing actual bindings to the component
  //  component = $componentController('chat',
  //    null,
  //    { inbox: inbox }
  //  );
  //  //console.log(component.inbox);
  //
  //  expect(component.inbox).toBe(inbox);
  //});
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
