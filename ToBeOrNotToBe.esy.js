var expect = function (val) {
  return {
    toBe: (val2) => {
      if (val === val2) {
        return  true;
      } else {
        throw "Not Equal";
      }
    },
    notToBe: (val2) => {
        if (val !== val2) {
            return  "Not Equal";
          } else {
            throw true;
          }
    },
  };
};

console.log(expect(5).notToBe(null));
