/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  return function (...args) {
    return fn.apply(this,args)
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
 let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
console.log(memoFactorial(3));
// memoizedFn(2, 3); // 5
// console.log(memoizedFn(2, 3)); // 5
// console.log(memoizedFn(2, 3)); // 5
// console.log(callCount); // 1
