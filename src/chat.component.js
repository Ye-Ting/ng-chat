/**
 * Created by yeting on 16/6/25.
 */

const template = `
{{vm.hello}}
`;

class controller {
  constructor() {
    this.hello = 'hello';
  }
}

const component = {
  template,
  controller,
  controllerAs: 'vm',
};

import { ngModule } from './index.module.js';

ngModule.component('chat', component);
