function NextGreaterElement(nums) {
  const result = new Array(nums.length).fill(-1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        result[i] = nums[j];
        break;
      }
    }
  }
  console.log(result);
}
NextGreaterElement([2, 1, 5, 6, 2, 3]);

function nextGreater(nums) {
  let result = new Array(nums.length).fill(-1);
  let n = nums.length;
  let stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      let ind = stack.pop();
      result[ind] = nums[i];
    }
    stack.push(i);
  }
  return result;
}
console.log(nextGreater([2, 1, 5, 6, 2, 3]));
