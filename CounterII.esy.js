const createCounter = (init) => {
  let curr = init;
  return {
    increment: () => {
      return ++curr;
    },
    decrement: () => {
      return --curr;
    },
    reset: () => {
      curr = init;
      return curr;
    },
  };
};
const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
