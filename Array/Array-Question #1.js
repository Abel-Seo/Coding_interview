// Solution 1
// const findTwoSum = (array, target) => {
//   for (let p1 = 0; p1 < array.length; p1++) {
//     const findNum = target - array[p1];

//     for (let p2 = p1 + 1; p2 < array.length; p2 += 1) {
//       if (findNum === array[p2]) return [p1, p2];
//     }
//   }

//   return null;
// };

// Using HashMap

const findTwoSum = (array, target) => {
  const hashMap = {};

  for (let p1 = 0; p1 < array.length; p1++) {
    const ntf = array[p1];

    if (hashMap[ntf] !== undefined) return [hashMap[ntf], p1];

    hashMap[target - ntf] = p1;
  }

  return null;
};

const array = [1, 3, 7, 9, 2];
const target = 11;

console.log(findTwoSum(array, target));
