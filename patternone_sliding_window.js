// Following are some ways you can identify that the given problem might require a sliding window:

// The problem input is a linear data structure such as a linked list, array, or string
// You’re asked to find the longest/shortest substring, subarray, or a desired value
// Common problems you use the sliding window pattern with:

// Maximum sum subarray of size ‘K’ (easy)
// Longest substring with ‘K’ distinct characters (medium)
// String anagrams (hard)

// ONE TEMPLATE (MENTAL MODEL)
// let left = 0
// let state = new Set() | sum | map
// let answer

// for (let right = 0; right < n; right++) {
//   // expand

//   while (invalid) {
//     // shrink
//     left++
//   }

//   // update answer
// }

// Longest Substring Without Repeating Characters
// function LongestSubNoRep(s) {
//   let seen = new Set();
//   let left = 0;
//   let max = 0;
//   let maxL = 0;
//   let start = 0;
//   let n = s.length;
//   for (let right = 0; right < n; right++) {
//     while (seen.has(s[right])) {
//       seen.delete(s[left]);
//       left++;
//     }
//     seen.add(s[right]);

//     max = Math.max(max, right - left + 1);

//     if (right - left + 1 > maxL) {
//       maxL = right - left + 1;
//       start = left;
//     }
//   }

//   return s.substring(start, start + maxL) + "=" + max;
// }
// console.log(LongestSubNoRep("bbbb"));

// Why Set :

// Only care if duplicate exists

// No need for counts

// var longestSubarraySum = function(nums, k) {
//   let sum = 0
//   let left = 0
//   let maxLen = 0

//   for (let right = 0; right < nums.length; right++) {
//     sum += nums[right]

//     while (sum > k) {
//       sum -= nums[left]
//       left++
//     }

//     maxLen = Math.max(maxLen, right - left + 1)
//   }

//   return maxLen
// }

// function longestKDistinct(s, k) {
//   let freq = new Map();
//   let left = 0;
//   let maxLen = 0;
//   let start = 0;

//   for (let right = 0; right < s.length; right++) {
//     let char = s[right];

//     freq.set(char, (freq.get(char) || 0) + 1);

//     // Shrink window if distinct chars > k
//     while (freq.size > k) {
//       let leftChar = s[left];
//       freq.set(leftChar, freq.get(leftChar) - 1);
//       console.log(freq);
//       if (freq.get(leftChar) === 0) {
//         freq.delete(leftChar);
//       }
//       left++;
//     }

//     // Update max window
//     if (right - left + 1 > maxLen) {
//       maxLen = right - left + 1;
//       start = left;
//     }
//   }

//   return s.substring(start, start + maxLen);
// }

// // Example
// console.log(longestKDistinct("eceba", 2)); // "ece"

// var maximumSubarraySum = function(nums, k) {
//     let n = nums.length
//     if(k>n) return null
//     let windowSum = 0;
//     let maxSum =0
//     for(let i =0 ; i< k;i++){
//         windowSum += nums[i]
//     }
//     maxSum = windowSum
//     for(let i = k ; i < n ;i++){
//         windowSum += nums[i] - nums[i- k]
//         maxSum = Math.max(maxSum, windowSum)
//     }
//     return maxSum
// };

// function minSubArrayLen(target, nums) {
//     let n = nums.length;
//     let left = 0;
//     let sum = 0;
//     let minLen = Infinity;

//     for (let right = 0; right < n; right++) {
//         sum += nums[right];  // expand window

//         // shrink window while sum >= target
//         while (sum >= target) {
//             minLen = Math.min(minLen, right - left + 1);
//             sum -= nums[left];
//             left++;
//         }
//     }

//     return minLen === Infinity ? 0 : minLen;
// }

// // Test
// console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // 2

// function longestSubarraySumAtMostK(nums, k) {
//     let left = 0;
//     let sum = 0;
//     let maxLen = 0;

//     for (let right = 0; right < nums.length; right++) {
//         sum += nums[right]; // expand window

//         // shrink window if sum > k
//         while (sum > k) {
//             sum -= nums[left];
//             left++;
//         }

//         // update max length
//         maxLen = Math.max(maxLen, right - left + 1);
//     }

//     return maxLen;
// }

// // Test
// console.log(longestSubarraySumAtMostK([1,2,3,4,5], 7)); // 3

// var findMaxAverage = function(nums, k) {
//     let sum = 0;
//     for (let i = 0; i < k; i++) {
//         sum += nums[i];
//     }
//     let maxSum = sum;
//     for (let i = k; i < nums.length; i++) {
//         sum += nums[i] - nums[i - k];
//         maxSum = Math.max(maxSum, sum);
//     }
//     return maxSum / k;
// };
