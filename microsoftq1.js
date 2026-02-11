function finalPrice(prices) {
  const n = prices.length;
  let fullPrice = [];
  let discs = [];
  let total = 0;
  for (let i = 0; i < n; i++) {
    let discount = 0;
    for (let j = i + 1; j < n; j++) {
      if (prices[j] <= prices[i]) {
        discount = prices[j];
        break;
      }
    }

    const finalPrice = prices[i] - discount;
    discs.push(finalPrice);
    total += finalPrice;
    if (discount == 0) {
      fullPrice.push(i);
    }
  }

  console.log(prices);
  console.log(discs);
  console.log(total);
  console.log(fullPrice.join(" "));
}
finalPrice([2, 3, 1, 2, 4, 2]);

function price(nums) {
  let fullPrice = [];
  let finalPrice = [...nums];
  let stack = [];

  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[i] <= nums[stack[stack.length - 1]]) {
      let index = stack.pop();
      finalPrice[index] -= nums[i];
    }
    stack.push(i);
  }
  while (stack.length) {
    fullPrice.push(stack.pop());
  }
  let total = 0;
  for (let price of finalPrice) {
    total += price;
  }
  console.log(total);
  console.log(fullPrice.join(" "));
}
price([2, 3, 1, 2, 4, 2]);
