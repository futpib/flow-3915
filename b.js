// @flow

import { AMixin } from './a';

const ABMixin = (superclass: *): * => class extends AMixin(superclass) {
    bMethod() {}
};

const AB = ABMixin(class {});

export { ABMixin, AB };

