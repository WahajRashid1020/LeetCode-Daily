// function maxSumSubarray(arr, k) {
//   let max = 0;
//   for (let i = 0; i <= arr.length - k; i++) {
//     let sum = 0;
//     for (let j = 0; j < k; j++) {
//       sum += arr[i + j];
//     }
//     max = Math.max(max, sum);
//   }
//   return max;
// }
// console.log(maxSumSubarray([8, 10, 2, 30, 4], 2));
// function maxSub(arr, k) {
//   let q = [];
//   let n = arr.length;
//   let sum = 0;
//   let max = 0;
//   for (let i = 0; i < n; i++) {
//     sum += arr[i];
//     q.push(arr[i]);
//     if (q.length > k) {
//       sum -= q.shift();
//     }
//     if (q.length === k) {
//       max = Math.max(max, sum);
//     }
//   }

//   return max;
// }
// console.log(maxSub([8, 10, 2, 30, 4], 2));
// function max(arr, k) {
//   let max = 0,
//     sum = 0;
//   for (let i = 0; i < k; i++) {
//     sum += arr[i];
//   }
//   max = sum;
//   for (let i = k; i < arr.length; i++) {
//     sum += arr[i] - arr[i - k];
//     max = Math.max(max, sum);
//   }

//   return max;
// }

// console.log(max([8, 10, 2, 30, 4], 2));

function square(arr) {
  let res = new Array(arr.length);
  let left = 0,
    right = arr.length - 1,
    i = arr.length - 1;
  while (left <= right) {
    let l = arr[left] * arr[left];
    let r = arr[right] * arr[right];
    if (l > r) {
      res[i] = l;
      left++;
    } else {
      res[i] = r;
      right--;
    }
    i--;
  }
  return res;
}
console.log(square([-2, -1, 3, 4, 5]));
