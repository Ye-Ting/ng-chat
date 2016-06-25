/**
 * Created by yeting on 16/6/25.
 */
const testsContext = require.context('.', true, /spec$/);
testsContext.keys().forEach(testsContext);
