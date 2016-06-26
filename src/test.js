/**
 * Created by yeting on 16/6/25.
 */
import 'angular-mocks';

const testsContext = require.context('.', true, /spec$/);
testsContext.keys().forEach(testsContext);
