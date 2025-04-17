const filter = (arr, fn) => {
  let result = [];
    let i = 0;
    while (i < arr.length) {
      if (fn(arr[i], i)) {
        result.push(arr[i]);
      }
      ++i;
    }
  return result;
};

const array = [1, 3, 4, 5];

const onePlus = filter(array, (n) => n !== 1);

console.log(onePlus);
