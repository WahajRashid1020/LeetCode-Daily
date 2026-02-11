/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length <= 1) return true;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (max <= i && nums[i] == 0) return false;
    if (i + nums[i] > max) {
      max = i + nums[i];
    }
    console.log("max", max);
    if (max >= nums.length - 1) return true;
  }
  return false;
};
console.log(canJump([2, 3, 1, 1, 4]));
