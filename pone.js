//sliding windows pattern
//max sum of subarray sum k
function maxSubarrayFixed(nums, k) {
  const n = nums.length;
  let sum = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i >= k - 1) {
      max = Math.max(max, sum);
      sum -= nums[i - (k - 1)];
    }
  }
  return max;
}
console.log(maxSubarrayFixed([2, 1, 5, 1, 3, 2], 3));

// Longest Substring Without Repeating Characters

function longestSub(nums) {
  let max = 0;
  let left = 0;
  let seen = new Set();
  for (let right = 0; right < nums.length; right++) {
    while (seen.has(nums[right])) {
      seen.delete(nums[left]);
      left++;
    }
    seen.add(nums[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
}
console.log(longestSub("abcadbcbb"));
