// When Do We Use Cyclic Sort?

// Use it when:

// Array contains numbers in range 1 to n

// OR 0 to n

// You need to:

// Find missing number

// Find duplicate number

// Find all duplicates

// Find smallest missing positive

// If values are in a fixed range and should map to an index → Think Cyclic Sort

// How do I identify this pattern?

// They will be problems involving a sorted array with numbers in a given range
// If the problem asks you to find the missing/duplicate/smallest number in an sorted/rotated array
// Problems featuring cyclic sort pattern:

// Find the Missing Number (easy)
// Find the Smallest Missing Positive Number (medium)

// TEMPLATE
// function cyclicSort(nums) {
//   let i = 0;

//   while (i < nums.length) {
//     let correctIndex = nums[i] - 1;

//     if (nums[i] !== nums[correctIndex]) {
//       // swap
//       [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
//     } else {
//       i++;
//     }
//   }

//   return nums;
// }

// function missingNumber(n) {
//   let i = 0;
//   while (i < n.length) {
//     let index = n[i];
//     if (n[i] < n.length && n[i] !== n[index]) {
//       [n[i], n[index]] = [n[index], n[i]];
//     } else {
//       i++;
//     }
//   }
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] !== i) return i;
//   }
//   return n.length;
// }
// console.log(missingNumber([1, 3, 4, 5, 0]));

// when i to n we use n[i]-1 if 0 to n range array then x=[x]
// function findDup(n) {
//   let i = 0;
//   while (i < n.length) {
//     let index = n[i] - 1;
//     if (n[i] !== n[index]) {
//       [n[i], n[index]] = [n[index], n[i]];
//     } else {
//       if (index !== i) return n[i];
//       i++;
//     }
//   }

//   return -1;
// }
// console.log(findDup([1, 4, 3, 5, 2]));

// function findAllDup(n) {
//   let i = 0;
//   let dup = [];
//   while (i < n.length) {
//     let index = n[i] - 1;
//     if (n[i] !== n[index]) {
//       [n[i], n[index]] = [n[index], n[i]];
//     } else {
//       i++;
//     }
//   }
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] !== i + 1) {
//       dup.push(n[i]);
//     }
//   }

//   return dup;
// }
// console.log(findAllDup([1, 4, 3, 3, 4, 5, 2]));

// /**
//  * First missing positive
//  * Time: O(n)
//  * Space: O(1)
//  */
// function firstMissingPositive(nums) {
//   let i = 0;

//   while (i < nums.length) {
//     let correctIndex = nums[i] - 1;

//     // Only place valid numbers
//     if (
//       nums[i] > 0 &&
//       nums[i] <= nums.length &&
//       nums[i] !== nums[correctIndex]
//     ) {
//       [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
//     } else {
//       i++;
//     }
//   }

//   // Find first mismatch
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== i + 1) {
//       return i + 1;
//     }
//   }

//   // If all positions correct
//   return nums.length + 1;
// }

// When you see:

// numbers in fixed range

// O(n)

// constant space

// find missing / duplicate

// Think:

// Correct index = value - 1
// Place it there.

function firstMissing(n) {
  let i = 0;
  let res = [];
  while (i < n.length) {
    let index = n[i] - 1;
    if (n[i] > 0 && n[i] !== n[index] && n[i] <= n.length) {
      [n[i], n[index]] = [n[index], n[i]];
    } else {
      i++;
    }
  }
  console.log("sorted");
  for (let i = 0; i < n.length; i++) {
    if (n[i] !== i + 1) res.push(i + 1);
  }
  return res;
}
console.log(firstMissing([6, 1, -2, -3, 4, 5]));
