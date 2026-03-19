console.log("sliding windows");
// Maximum sum subarray of size ‘K’ (easy)

function maxsumSubarray(nums, k) {
  let maxsum = 0;
  let currentsum = 0;
  for (let i = 0; i < k; i++) {
    currentsum += nums[i];
  }
  maxsum = currentsum;
  for (let i = k; i < nums.length; i++) {
    currentsum += nums[i] - nums[i - k];
    maxsum = Math.max(currentsum, maxsum);
  }
  return maxsum;
}
nums = [2, 1, 5, 1, 3, 2];
k = 3;
console.log(maxsumSubarray(nums, k));

// distinct values
var maximumSubarraySum = function (nums, k) {
  let seen = new Set();
  let sum = 0;
  let max = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    // remove duplicates
    while (seen.has(nums[right])) {
      seen.delete(nums[left]);
      sum -= nums[left];
      left++;
    }

    seen.add(nums[right]);
    sum += nums[right];

    // shrink if window > k
    if (right - left + 1 > k) {
      seen.delete(nums[left]);
      sum -= nums[left];
      left++;
    }

    if (right - left + 1 === k) {
      max = Math.max(max, sum);
    }
  }

  return max;
};

// longest substring with k distinct character
console.log("freq");
function longestSubstringKDistinct(str1, k1) {
  let freq = new Map();
  let max = 0,
    l = 0;
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    freq.set(char, (freq.get(char) || 0) + 1);
    while (freq.size > k1) {
      let leftc = str1[l];
      freq.set(leftc, freq.get(leftc) - 1);
      if (freq.get(leftc) === 0) {
        freq.delete(leftc);
      }
      l++;
    }
    max = Math.max(max, i - l + 1);
  }

  return max;
}
str1 = "araaci";
k1 = 2;
console.log(longestSubstringKDistinct(str1, k1));

console.log("unique");
function norep(l1) {
  let seen = new Set();
  let max = 0;
  let l = 0;
  for (let i = 0; i < l1.length; i++) {
    while (seen.has(l1[i])) {
      seen.delete(l1[l]);
      l++;
    }
    seen.add(l1[i]);
    max = Math.max(max, i - l + 1);
  }
  return max;
}
console.log(norep("aaabkacd"));

function minSubArrayLen(S, arr) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum >= S) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= arr[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
