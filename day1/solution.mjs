import { data } from "./data.mjs";

const arr = data.split("\n");

const spelledNumbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const numbers = arr.map((item) => {
  let newItem = item;
  for (const [key, value] of Object.entries(spelledNumbers)) {
    if (item.includes(key)) {
      newItem = newItem.replaceAll(
        key,
        `${key.charAt(0)}${value}${key.charAt(key.length - 1)}`
      );
    }
  }

  console.log(newItem);

  const arr = newItem.split("");
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

const sum = numbers.reduce((acc, curr) => acc + curr);
console.log(sum);
