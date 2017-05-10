// @flow

const AMixin = (superclass: *): * => class extends superclass {
    aMethod() {}
};

const A = AMixin(class {});

export { AMixin, A };
