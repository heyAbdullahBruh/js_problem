const isPrimeNumb = (num) => {
  try {
    if (typeof num !== "number" && typeof num !== "bigint") {
      return `${num} is not a valid number. Please enter a valid number.`;
    }

    if (typeof num === "number") {
      if (!Number.isInteger(num)) {
        return `${num} is not an integer.`;
      }
      num = BigInt(num); // Convert to BigInt
    }

    if (num < 2n) return `'${num}' is not a prime number.`;
    if (num === 2n) return `'${num}' is a prime number.`;

    const sqrt = BigInt(Math.floor(Math.sqrt(Number(num))));
    for (let i = 2n; i <= sqrt; i++) {
      if (num % i === 0n) {
        return `'${num}' is not a prime number.`;
      }
    }

    return `'${num}' is a prime number.`;
  } catch (error) {
    return error.message;
  }
};

// for
const result = isPrimeNumb(17n);

console.log(result);
