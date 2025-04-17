const counter = (n) => {
  return () => {
    return n++;
  };
};

const cf = counter(10);

console.log(cf(), cf(), cf());
