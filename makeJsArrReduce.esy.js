/* version -1 */

// const reduce = (nums, fn, init) => {
//   let result;
//   let i = init;
//   while (i < nums.length) {
//    if (nums[i+1]) {
//     result = fn( nums[i] + nums[i+1], nums[i]);
//    }
//     i++;
//   }
//   return result;
// };

// const array = [[1, 2], [3, 4], [5]];

// const onePlus = reduce(array, (acc, curr) => acc.concat(curr), []);

// console.log(onePlus);

/* version-2*/
const reduce = (nums, fn, init) => {
  let result = init;
  let i = 0;
  while (i < nums.length) {
    result = fn(result, nums[i]);

    i++;
  }
  return result;
};

const array = [[1, 2], [3, 4], [5]];

const newArr = reduce(array, (acc, curr) => acc.concat(curr), []);
const sum = reduce(newArr, (acc, curr) => acc + curr, 0);

console.log(newArr);
console.log(sum);

