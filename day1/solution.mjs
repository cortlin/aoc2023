import { data } from "./data.mjs";

const arr = data.split("\n");

const numbers = arr.map((item) => {
  const arr = item.split("");
  const filtered = arr
    .filter((item) => Number(item))
    .map((item) => parseInt(item));

  if (filtered.length === 1) {
    const double = Number(filtered[0].toString() + filtered[0].toString());
    return double;
  }

  const firstAndLast = filtered.filter((item, index) => {
    if (index === 0 || index === filtered.length - 1) {
      return item;
    }
  });

  const combined = Number(firstAndLast.join(""));
  return combined;
});

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
