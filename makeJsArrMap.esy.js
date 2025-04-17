const map = (arr, fn) => {
  let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     result.push(fn(arr[i], i));
  //   }
  let i = 0;
  while (i < arr.length) {
    result.push(fn(arr[i], i));
    i++
  }
  return result;
};

const array = [1, 3, 4, 5];

const onePlus = map(array, () => 42);

console.log(onePlus);
