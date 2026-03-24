// ===============================
// 1. NORMAL BINARY SEARCH
// ===============================
function binarySearch(nums, target) {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      left = mid + 1;   // go right
    } else {
      right = mid - 1;  // go left
    }
  }

  return -1;
}


// ===============================
// 2. FIRST POSITION (LEFT BOUND)
// ===============================
function findFirst(nums, target) {
  let left = 0, right = nums.length - 1;
  let ans = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      ans = mid;
      right = mid - 1; // 🔥 keep going LEFT
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}


// ===============================
// 3. LAST POSITION (RIGHT BOUND)
// ===============================
function findLast(nums, target) {
  let left = 0, right = nums.length - 1;
  let ans = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      ans = mid;
      left = mid + 1; // 🔥 keep going RIGHT
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}


// ===============================
// 4. SEARCH RANGE (FIRST + LAST)
// ===============================
function searchRange(nums, target) {
  return [findFirst(nums, target), findLast(nums, target)];
}


// ===============================
// 5. ROTATED SORTED ARRAY SEARCH
// ===============================
function searchRotated(nums, target) {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // 🔥 Check which side is sorted
    if (nums[left] <= nums[mid]) {
      // LEFT side is sorted

      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // go left
      } else {
        left = mid + 1;  // go right
      }

    } else {
      // RIGHT side is sorted

      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;  // go right
      } else {
        right = mid - 1; // go left
      }
    }
  }

  return -1;
}