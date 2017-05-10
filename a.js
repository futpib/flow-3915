// @flow

const AMixin = (superclass: Class<*>): Class<*> => class extends superclass {
    aMethod() {}
};

const A = AMixin(class {});

export { AMixin, A };
