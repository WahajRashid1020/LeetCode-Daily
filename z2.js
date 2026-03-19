// remove dup and resturn length of new Array

function nondup(arr) {
  let slow = 0;
  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[slow] !== arr[fast]) {
      slow++;
      arr[slow] = arr[fast];
    }
  }
  return slow + 1;
}
console.log(nondup([2, 3, 3, 3, 6, 9, 9]));

function twosum(nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
console.log("Two sum", twosum([2, 5, 9, 11], 7));

function threesome(nums) {
  let res = [];
  let n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1,
      k = n - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }

  return res;
}
console.log("3some", threesome([-1, 0, 1, 2, -1, -4]));

function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);

  let closest = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      // update closest if better
      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }

      if (sum < target) {
        left++; // need bigger sum
      } else if (sum > target) {
        right--; // need smaller sum
      } else {
        return sum; // perfect match 🎯
      }
    }
  }

  return closest;
}
