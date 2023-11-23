// Solution 1 : Brute Force

// const maxArea = (height) => {
//   let ans = 0;

//   for (let left = 0; left < height.length; left += 1) {
//     for (let right = left + 1; right < height.length; right += 1) {
//       const size = Math.min(height[left], height[right]) * (right - left);
//       ans = Math.max(ans, size);
//     }
//   }

//   return ans;
// };

// Solution 2 :

const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;

  let len = Math.min(height[left], height[right]);
  let wid = right - left;
  let area = len * wid;

  while (left < right) {
    const leftVal = height[left];
    const rightVal = height[right];

    if (leftVal > rightVal) {
      right -= 1;
    } else {
      left += 1;
    }
    len = Math.min(height[left], height[right]);
    wid = right - left;
    area = Math.max(area, len * wid);
  }

  return area;
};

const height = [1, 3, 5, 7, 9];
console.log(maxArea(height));
