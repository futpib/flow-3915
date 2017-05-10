An illustration for https://github.com/facebook/flow/issues/3915

```
$ git clone https://github.com/futpib/flow-3915.git
$ cd flow-3915/
$ flow

b.js:5
  5: const ABMixin = (superclass: Class<*>): Class<*> => class extends AMixin(superclass) {
                                                                              ^^^^^^^^^^ class expr `<<anonymous class>>`. This type is incompatible with the expected param type of
  7: const A = AMixin(class {});
                      ^^^^^^^^ class expr `<<anonymous class>>`. See: a.js:7


Found 1 error
```