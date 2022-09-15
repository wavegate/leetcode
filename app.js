// best time to buy and sell stock II
// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/564/

const prices = [1, 2, 3, 4, 5];

var maxProfit = function (prices) {
  let total = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const diff = prices[i + 1] - prices[i];
    if (diff > 0) {
      total += diff;
    }
  }
  return total;
};

console.log(maxProfit(prices));

// rotate array
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
