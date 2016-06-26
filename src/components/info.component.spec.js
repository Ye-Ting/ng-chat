/**
 * Created by yeting on 16/6/25.
 */

import './conversation.component.js';

describe('component: conversation', () => {
  let component;
  let scope;
  let people;
  let $componentController;

  beforeEach(angular.mock.module('ngChat'));

  beforeEach(angular.mock.inject(($rootScope, _$componentController_) => {
    scope = $rootScope.$new();
    $componentController = _$componentController_;
    people = {
      name: 'yeting',
    };
  }));

  it('should assign the name bindings to the inbox object', () => {
    // Here we are passing actual bindings to the component
    component = $componentController('chat',
      null,
      { people }
    );

    expect(component.people).toBe(people);
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
