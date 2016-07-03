/**
 * Created by yeting on 16/6/25.
 */

import angular from 'angular';
import UIRoute from 'angular-ui-router';
import angularSanitize from 'angular-sanitize';

// 第三方依赖都可以放在这里
export const ngModule = angular.module('ngChat', [
  UIRoute,
  angularSanitize,
]);

/**
 * Adds a custom global "redirectTo" transition hook.
 *
 * This hook will be triggered if the destination state has a 'redirectTo' property.
 * The hook will return a new TargetState based on the value of the original destination
 * state's 'redirectTo' property.
 * The Transition will then be redirected to the new TargetState.
 */
ngModule.run(($state, $transitions) => {
  // Matches if the destination state has a 'redirectTo' property
  const matchCriteria = { to: (state) => state.redirectTo != null };
  // Function that returns a redirect for a transition, with a TargetState
  // created using the destination state's 'redirectTo' property
  const redirectFn = ($transition$) => {

    const options = $transition$.options();
    options.location = 'replace';

    return $state.target($transition$.to().redirectTo, $transition$.params(), options);
  };

  // Register the global 'redirectTo' hook
  $transitions.onBefore(matchCriteria, redirectFn);
});
