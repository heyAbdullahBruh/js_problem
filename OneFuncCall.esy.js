/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (func) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = func.apply(this, args);
      return result;
    } else {
      return undefined;
    }
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

let fn2 = (c, d, e) => c + d + e;
let onceFn2 = once(fn2);

console.log(onceFn(1, 2, 3));
console.log(onceFn2(2, 3, 6));
console.log(onceFn(3, 3, 6));
console.log(onceFn(4, 3, 6));
