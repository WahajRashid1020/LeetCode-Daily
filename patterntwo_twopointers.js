// Two Pointers or Iterators

// Two Pointers is a pattern where two pointers iterate
//  through the data structure in tandem until one or both
//   of the pointers hit a certain condition.Two Pointers
//    is often useful when searching pairs in a sorted array
//     or linked list; for example, when you have to compare
//     each element of an array to its other elements.

// Two pointers are needed because with just pointer,
// you would have to continually loop back through the
//  array to find the answer. This back and forth with a
//   single iterator is inefficient for time and space
//   complexity — a concept referred to as asymptotic
//    analysis. While the brute force or naive solution
//     with 1 pointer would work, it will produce something
//      along the lines of O(n²). In many cases, two pointers
//       can help you find a solution with better space or runtime complexity.

// Ways to identify when to use the Two Pointer method:

// It will feature problems where you deal with sorted arrays (or Linked Lists) and need to find a set of elements that fulfill certain constraints
// The set of elements in the array is a pair, a triplet, or even a subarray
// Here are some problems that feature the Two Pointer pattern:

// Squaring a sorted array (easy)
// Triplets that sum to zero (medium)
// Comparing strings that contain backspaces (medium)

// TEMPLATE

// let left = 0;
// let right = arr.length - 1;

// while (left < right) {

//     if (condition) {
//         left++;
//     } else {
//         right--;
//     }
// }

// When To Use

// Use when problem says:

// sorted array

// palindrome

// pair sum in sorted array

// comparing largest/smallest

// squaring sorted array

// container type problems

// Squaring a sorted array (easy)
// var sortedSquares = function(nums) {
//     let left = 0;
//     let right = nums.length - 1;
//     let i = nums.length - 1;
//     let res = new Array(nums.length);

//     while (left <= right) {
//         let leftSquare = nums[left] * nums[left];
//         let rightSquare = nums[right] * nums[right];

//         if (leftSquare > rightSquare) {
//             res[i] = leftSquare;
//             left++;
//         } else {
//             res[i] = rightSquare;
//             right--;
//         }

//         i--;
//     }

//     return res;
// };

// TWO SUM II
// Dealing with sorted array

// var twoSum = function(nums, target) {
//  let left =0
//  let right = nums.length-1
//  while(left< right){
//     let sum = nums[left]+nums[right]
//     if(sum===target){
//         return [left +1,right+1]
//     }
//     else if(sum < target){
//         left++
//     } else{
//         right--
//     }
//  }

//     }

// valid palindrom
/**
 * @param {string} s
 * @return {boolean}z
 */
//  var isPalindrome = function(s) {
//     let l = 0, r = s.length-1;
//     while(l<r){
//         while(l<r && !isAlpha(s[l])) l++;
//         while(l<r && !isAlpha(s[r])) r--;
//         if(s[l].toLowerCase() != s[r].toLowerCase()){
//             return false
//         }
//         l++;
//         r--;

//     }
//     return true

// };
// function isAlpha(c){
//     return(
//         (c >= 'A' && c <= 'Z') ||
//         (c >='a' && c <= 'z') ||
//         (c >= '0' && c <= '9')

//     );

// }

// var removeDuplicates = function (nums) {
//   if (nums.length === 0) return 0;
//   let j = 0;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[j] != nums[i]) {
//       j++;
//       nums[j] = nums[i];
//     }
//   }
//   return nums.slice(0, j + 1);
// };
// console.log(removeDuplicates([1, 1, 1, 1, 2, 2, 3, 5, 4]));

// Comparing strings that contain backspaces
// var backspaceCompare = function(s, t) {
//     let schar = s.split('')
//     let tchar = t.split('')
//     let k = ps(schar)
//     let p= ps(tchar)
//     if(k!==p) return false
//     for(let i =0; i< k;i++){
//         if(schar[i] !== tchar[i]) return false
//     }

//     return true

// };
// function ps(chars){
//   let k = 0;
//     for (let c of chars) {
//         if (c !== '#') {
//             chars[k++] = c;
//         } else if (k > 0) {
//             k--;
//         }
//     }
//     return k;

// }

// 3Sum
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//     let res = []
//     let n = nums.length
//     nums.sort((a,b)=> a-b)

//     for(let i = 0; i < n-2 ; i++){
//         if(nums[i]===nums[i-1] && i>0) {continue}
//         let j = i+1, k = n-1
//         while(j<k){
//             let sum = nums[i]+nums[j]+nums[k]
//             if(sum < 0){
//                 j++
//             } else if(sum > 0){
//                 k--
//             } else {
//                 res.push([nums[i],nums[j],nums[k]])
//                 j++
//                 k--
//                 while(j<k && nums[j]===nums[j-1]){
//                     j++
//                 }
//                  while(j<k && nums[k]===nums[k+1]){
//                     k--
//                 }
//             }
//         }
//     }
//     return res
// };
