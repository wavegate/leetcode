// // best time to buy and sell stock II
// // https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/564/

// const prices = [1, 2, 3, 4, 5];

// var maxProfit = function (prices) {
//   let total = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     const diff = prices[i + 1] - prices[i];
//     if (diff > 0) {
//       total += diff;
//     }
//   }
//   return total;
// };

// // rotate array
// // https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

// const nums = [1, 2],
//   k = 5;

// var rotate = function (nums, k) {
//   const degree = k % nums.length;
//   const inter = nums.splice(nums.length - degree);
//   nums.unshift.apply(nums, inter);
// };
// rotate(nums, k);
// console.log(nums);

// contains duplicate
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

// const nums = [1, 2, 3, 1];

// var containsDuplicate = function (nums) {
//   const set = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) {
//       return true;
//     } else {
//       set.add(nums[i]);
//     }
//   }
//   return false;
// };

// console.log(containsDuplicate(nums));

// const nums = [2, 2, 1];

// var singleNumber = function (nums) {
//   let res = 0;
//   for (let i = 0; i < nums.length; i++) {
//     res ^= nums[i];
//   }
//   return res;
// };
// console.log(singleNumber(nums));

// intersection of two arrays II
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

// const nums1 = [4, 9, 5],
//   nums2 = [9, 4, 9, 8, 4];

// var intersect = function (nums1, nums2) {
//   const firstSet = new Map();
//   const secondSet = new Map();
//   for (let i = 0; i < nums1.length; i++) {
//     if (firstSet.has(nums1[i])) {
//       firstSet.set(nums1[i], firstSet.get(nums1[i]) + 1);
//     } else {
//       firstSet.set(nums1[i], 1);
//     }
//   }
//   for (let i = 0; i < nums2.length; i++) {
//     if (secondSet.has(nums2[i])) {
//       secondSet.set(nums2[i], secondSet.get(nums2[i]) + 1);
//     } else {
//       secondSet.set(nums2[i], 1);
//     }
//   }
//   const final = [];
//   for (let [key, value] of secondSet) {
//     const firstValue = firstSet.get(key);
//     if (firstValue) {
//       for (let i = 0; i < Math.min(value, firstValue); i++) {
//         final.push(key);
//       }
//     }
//   }
//   return final;
// };

// console.log(intersect(nums1, nums2));

// const quickSort = (arr, left = 0, right = arr.length - 1) => {
//   if (arr.length <= 1) return;
//   let pivot = arr[(right + left) >> 1];
//   let i = left,
//     j = right,
//     tmp;
//   while (i <= j) {
//     while (arr[i] < pivot) i++;
//     while (arr[j] > pivot) j--;
//     // (☆)
//     i <= j && ((tmp = arr[i]), (arr[i++] = arr[j]), (arr[j--] = tmp));
//   }
//   left < i - 1 && quickSort(arr, left, i - 1);
//   i < right && quickSort(arr, i, right);
// };

// plus one
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

// const arrayToInteger = (arr) => {
//   return arr.reduce(
//     (prev, curr, index) => prev + curr * Math.pow(10, arr.length - index - 1),
//     0
//   );
// };

// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var plusOne = function (digits) {
//   //   const newNumber = arrayToInteger(digits);
//   //   console.log(newNumber);
//   //   const str = String(newNumber);
//   //   Array.from(str, (num) => Number(num));
//   let carryOver = false;
//   for (let i = digits.length - 1; i >= 0; i--) {
//     // console.log(i);
//     if (i == digits.length - 1) {
//       digits[i] = digits[i] + 1;
//     }
//     if (carryOver) {
//       digits[i] = digits[i] + 1;
//     }
//     if (digits[i] == 10) {
//       digits[i] = 0;
//       carryOver = true;
//     } else {
//       carryOver = false;
//     }
//   }

//   if (carryOver) {
//     digits.unshift(1);
//   }
//   return digits;
// };

// const digits = [9, 9, 9];
// console.log(plusOne(digits));

// two sum
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

// const nums = [2, 7, 11, 15],
//   target = 9;

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//   const store = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (store.has(target - nums[i])) {
//       return [store.get(target - nums[i]), i];
//     } else {
//       store.set(nums[i], i);
//     }
//   }
// };

// console.log(twoSum(nums, target));

// valid sudoku
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/

// const board = [
//   ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// const checkArray = (arr) => {
//   const arraySet = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != ".") {
//       const value = arr[i];
//       const hasValue = arraySet.has(value);
//       if (hasValue) {
//         return false;
//       } else {
//         arraySet.add(value);
//       }
//     }
//   }
// };

// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
// var isValidSudoku = function (board) {
//   let valid = true;
//   for (let row = 0; row < board.length; row++) {
//     if (!checkArray(board[row])) {
//       valid = false;
//     }
//   }

//   for (let i = 0; i < board[0].length; i++) {
//     const fullCol = [];
//     for (let row of board) {
//       fullCol.push(row[i]);
//     }
//     if (!checkArray(fullCol)) {
//       valid = false;
//     }
//   }
//   return valid;
// };

// console.log(isValidSudoku(board));

// https://leetcode.com/problems/sort-colors/
// const nums = [2, 0, 1];

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var sortColors = function (nums) {
//   const swap = function (index1, index2) {
//     const temp = nums[index1];
//     nums[index1] = nums[index2];
//     nums[index2] = temp;
//   };
//   let ltr = 0;
//   let rtl = nums.length - 1;
//   let check = ltr;
//   while (check <= rtl) {
//     console.log(ltr, rtl, check, nums);
//     while (nums[ltr] === 0) {
//       ltr++;
//     }
//     while (nums[rtl] === 2) {
//       rtl--;
//     }
//     check = ltr;
//     while (check <= rtl) {
//       if (nums[check] === 0) {
//         swap(check, ltr);
//         break;
//       } else if (nums[check] === 2) {
//         swap(check, rtl);
//         break;
//       } else {
//         check++;
//       }
//     }
//   }
// };

// sortColors(nums);
// console.log(nums);

//3. Longest Substring Without Repeating Characters

// const s = "awefidzzjblz";

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function (s) {
//   let left = 0;
//   let right = 0;
//   let max = -1;
//   const letters = new Set();
//   letters.add(s[left]);
//   if (s.length === 0) {
//     return 0;
//   }
//   if (s.length < 2) {
//     return 1;
//   }
//   while (left < s.length - 1 && right < s.length - 1) {
//     right++;
//     while (letters.has(s[right])) {
//       letters.delete(s[left]);
//       left++;
//     }
//     letters.add(s[right]);
//     // console.log(left, right);
//     let length = right - left + 1;
//     console.log(length);
//     if (length > max) {
//       max = length;
//     }
//   }
//   return max;
// };

// console.log(lengthOfLongestSubstring(s));

// 209. Minimum Size Subarray Sum
// const target = 7,
//   nums = [2, 10];

// /**
//  * @param {number} target
//  * @param {number[]} nums
//  * @return {number}
//  */
// var minSubArrayLen = function (target, nums) {
//   if (nums.length === 0) {
//     return 0;
//   }
//   if (nums.length === 1) {
//     if (nums[0] >= target) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
//   if (nums[0] >= target) {
//     return 1;
//   }
//   let left = 0;
//   let right = 0;
//   let min = Number.MAX_VALUE;
//   let total = nums[0];
//   while (right < nums.length - 1) {
//     right++;
//     total += nums[right];
//     // console.log(left, right);
//     // console.log(total);
//     while (total >= target) {
//       const length = right - left + 1;
//       if (length < min) {
//         min = length;
//       }
//       total -= nums[left];
//       left++;
//       // console.log(nums[left]);
//     }
//   }
//   if (min === Number.MAX_VALUE) {
//     return 0;
//   }
//   return min;
// };

// console.log(minSubArrayLen(target, nums));

// // 76. Minimum Window Substring
// const s = "AEBBA",
//   t = "AB";
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
// var minWindow = function (s, t) {
//   const counter = new Map();

//   for (let i = 0; i < t.length; i++) {
//     if (!counter.has(t[i])) {
//       counter.set(t[i], 1);
//     } else {
//       counter.set(t[i], counter.get(t[i]));
//     }
//   }

//   let saveLeft = -1;
//   let saveRight = -1;
//   let left = 0;
//   let right = 0;
//   let min = Number.MAX_VALUE;

//   let counterCopy = new Map(counter);

//   if (counter.has(s[left])) {
//     if (counter.get(s[left]) > 1) {
//       counter.set(s[left], counter.get(s[left] - 1));
//     } else {
//       counter.delete(s[left]);
//     }
//   }

//   while (right < s.length - 1) {
//     right++;
//     if (counter.has(s[right])) {
//       if (counter.get(s[right]) > 1) {
//         counter.set(s[right], counter.get(s[right]) - 1);
//       } else {
//         counter.delete(s[right]);
//       }
//     }
//     while (counter.size === 0) {
//       let length = right - left + 1;
//       if (length < min) {
//         min = length;
//         saveLeft = left;
//         saveRight = right;
//       }
//       if (counterCopy.has(s[left])) {
//         counter.set(s[left], 1);
//       }
//       left++;
//     }
//   }
//   return s.substring(saveLeft, saveRight + 1);
// };
// console.log(minWindow(s, t));

// const s = "ababba";

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var countSubstrings = function (s) {
//   let counter = 0;
//   for (let i = 0; i < s.length; i++) {
//     let left = i;
//     let right = i;
//     while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
//       counter++;
//       left -= 1;
//       right += 1;
//     }
//     left = i;
//     right = i + 1;
//     while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
//       counter++;
//       left -= 1;
//       right += 1;
//     }
//   }
//   return counter;
// };

// console.log(countSubstrings(s));

// const nums1 = [],
//   m = 0,
//   nums2 = [],
//   n = 0;

// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function (nums1, m, nums2, n) {
//   let index = m + n - 1;
//   let first = m - 1;
//   let second = n - 1;
//   while (first >= 0 || second >= 0) {
//     if (first < 0) {
//       nums1[index] = nums2[second];
//       second--;
//     } else if (second < 0) {
//       nums1[index] = nums1[first];
//       first--;
//     } else if (nums1[first] >= nums2[second]) {
//       nums1[index] = nums1[first];
//       first--;
//     } else {
//       nums1[index] = nums2[second];
//       second--;
//     }
//     index--;
//   }

//   return nums1;
// };

// console.log(merge(nums1, m, nums2, n));

// const temperatures = [5, 2, 7, 6, 7, 8];

// /**
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
// var dailyTemperatures = function (temperatures) {
//   const answer = new Array(temperatures.length);
//   answer[temperatures.length - 1] = 0;
//   for (let index = temperatures.length - 2; index >= 0; index--) {
//     for (let i = index + 1; i < temperatures.length; i++) {
//       if (temperatures[i] > temperatures[index]) {
//         answer[index] = i - index;
//         break;
//       } else {
//         if (answer[i] === 0) {
//           answer[index] = 0;
//           break;
//         }
//         i += answer[i] - 1;
//       }
//     }
//   }
//   return answer;
// };

// console.log(dailyTemperatures(temperatures));

// 1944. Number of Visible People in a Queue

// const heights = [5, 1, 2, 3, 10];

// /**
//  * @param {number[]} heights
//  * @return {number[]}
//  */
// var canSeePersonsCount = function (heights) {
//   const nextBiggest = new Array(heights.length);
//   const answer = new Array(heights.length);
//   nextBiggest[heights.length - 1] = 0;
//   answer[heights.length - 1] = 0;
//   for (let index = heights.length - 2; index >= 0; index--) {
//     for (let i = index + 1; i < heights.length; i++) {
//       if (heights[i] > heights[index]) {
//         nextBiggest[index] = i - index;
//         break;
//       } else {
//         if (nextBiggest[i] === 0) {
//           nextBiggest[index] = 0;
//           break;
//         }
//         i += nextBiggest[i] - 1;
//       }
//     }
//     // console.log(nextBiggest);
//     let counter = 0;
//     for (let i = index + 1; i < heights.length; i++) {
//       if (heights[i] > heights[index] || nextBiggest[i] === 0) {
//         counter++;
//         break;
//       } else {
//         counter++;
//         i += nextBiggest[i] - 1;
//       }
//     }
//     answer[index] = counter;
//   }
//   // console.log(nextBiggest);
//   return answer;
// };

// console.log(canSeePersonsCount(heights));

// 56. Merge Intervals

// const intervals = [
//   [2, 3],
//   [2, 2],
//   [3, 3],
//   [1, 3],
//   [5, 7],
//   [2, 2],
//   [4, 6],
// ];

// /**
//  * @param {number[][]} intervals
//  * @return {number[][]}
//  */
// var merge = function (intervals) {
//   const compare = (a, b) => {
//     if (a[0] < b[0]) {
//       return -1;
//     } else {
//       return 1;
//     }
//   };

//   intervals.sort(compare);

//   for (let index = 0; index < intervals.length; index++) {
//     // console.log(intervals);
//     for (let pointer = index + 1; pointer < intervals.length; pointer++) {
//       if (intervals[index][1] >= intervals[pointer][0]) {
//         intervals[index][1] = Math.max(
//           intervals[index][1],
//           intervals[pointer][1]
//         );
//         intervals[pointer] = 0;
//       } else {
//         index = pointer - 1;
//         break;
//       }
//     }
//     // console.log(index);
//   }

//   const answer = new Array();

//   for (let i = 0; i < intervals.length; i++) {
//     if (intervals[i]) {
//       answer.push(intervals[i]);
//     }
//   }

//   return answer;
// };

// console.log(merge(intervals));

// 435. Non-overlapping Intervals

// const intervals = [
//   [0, 5],
//   [1, 8],
//   [6, 9],
//   [8, 10],
//   [12, 15],
// ];

// /**
//  * @param {number[][]} intervals
//  * @return {number}
//  */
// var eraseOverlapIntervals = function (intervals) {
//   const compare = (a, b) => {
//     if (a[0] < b[0]) {
//       return -1;
//     } else if (a[0] === b[0]) {
//       if (a[1] < b[1]) {
//         return -1;
//       } else {
//         return 1;
//       }
//     } else {
//       return 1;
//     }
//   };

//   intervals.sort(compare);

//   let counter = 0;

//   for (let index = 0; index < intervals.length; index++) {
//     let pointer = index + 1;

//     while (pointer < intervals.length) {
//       // console.log(intervals);
//       // console.log(index, pointer);
//       if (
//         intervals[index][0] < intervals[pointer][0] &&
//         intervals[index][1] > intervals[pointer][1]
//       ) {
//         counter++;
//         index = pointer - 1;
//         break;
//       }
//       if (intervals[pointer][0] < intervals[index][1]) {
//         counter++;
//         pointer++;
//       } else {
//         break;
//       }
//     }
//     index = pointer - 1;
//   }

//   return counter;
// };

// console.log(eraseOverlapIntervals(intervals));

// 238. Product of Array Except Self

// const nums = [-1, 1, 0, -3, 3];

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function (nums) {
//   const answer = new Array(nums.length);
//   const prefix = new Array(nums.length);
//   const suffix = new Array(nums.length);
//   prefix[0] = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     prefix[i] = nums[i] * prefix[i - 1];
//   }
//   suffix[suffix.length - 1] = nums[nums.length - 1];
//   for (let i = suffix.length - 2; i > -1; i--) {
//     suffix[i] = nums[i] * suffix[i + 1];
//   }
//   answer[0] = suffix[1];
//   answer[answer.length - 1] = prefix[answer.length - 2];
//   for (let i = 1; i < answer.length - 1; i++) {
//     answer[i] = prefix[i - 1] * suffix[i + 1];
//   }
//   return answer;
// };

// console.log(productExceptSelf(nums));

// 41. First Missing Positive

// const nums = [1, 2, 3];

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var firstMissingPositive = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       nums[i] = 0;
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 1 || nums[i] > nums.length) {
//       continue;
//     }
//     const value = nums[nums[i] - 1];
//     if (value < 0) {
//       continue;
//     }
//     if (value === 0) {
//       nums[nums[i] - 1] = -1;
//       continue;
//     }
//     const pointer = nums[i];
//     nums[i] = value;
//     nums[pointer - 1] = -nums[pointer - 1];
//     if (pointer > i + 1) {
//       i = i - 1;
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= 0) {
//       return i + 1;
//     }
//   }
//   return nums.length + 1;
// };

// console.log(firstMissingPositive(nums));

// 53. Maximum Subarray

// var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// nums = [5, -3, 2, -8, 9];
// nums = [5, -3, 2];

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function (nums) {
//   const recursiveCutDown = (nums) => {
//     console.log(nums);
//     let leftTotal = 0;
//     let i = 0;
//     for (i; i < nums.length; i++) {
//       leftTotal += nums[i];
//       if (leftTotal <= 0) {
//         break;
//       }
//     }

//     let rightTotal = 0;
//     let j = nums.length - 1;
//     for (j; j > -1; j--) {
//       rightTotal += nums[j];
//       if (rightTotal <= 0) {
//         break;
//       }
//     }
//     console.log(i, j);

//     if (i === nums.length && j === -1) {
//       return leftTotal;
//     }

//     const leftSubarray = nums.slice(0, Math.min(i, j));
//     const rightSubarray = nums.slice(Math.max(i, j + 1));
//     const midSubarray = nums.slice(i + 1, j);
//     console.log(leftSubarray, midSubarray, rightSubarray);
//     return Math.max(
//       recursiveCutDown(leftSubarray),
//       recursiveCutDown(midSubarray),
//       recursiveCutDown(rightSubarray)
//     );
//   };
//   recursiveCutDown(nums);
// };

// console.log(maxSubArray(nums));

// 49. Group Anagrams

// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// var groupAnagrams = function (strs) {};

// console.log(groupAnagrams(strs));

// 242. Valid Anagram

// const s = "rattt",
//   t = "atrt";

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function (s, t) {
//   const primes = [
//     2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
//     73, 79, 83, 89, 97, 101,
//   ];

//   let firstProduct = 1;
//   for (let i = 0; i < s.length; i++) {
//     const code = s.charCodeAt(i) - 97;
//     firstProduct *= primes[code];
//   }
//   let secondProduct = 1;
//   for (let i = 0; i < t.length; i++) {
//     const code = t.charCodeAt(i) - 97;
//     secondProduct *= primes[code];
//   }
//   return firstProduct === secondProduct;
// };

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function (s, t) {
//   const sMap = new Map();
//   const tMap = new Map();
//   for (let i = 0; i < s.length; i++) {
//     const newValue = s[i];
//     if (sMap.has(newValue)) {
//       sMap.set(newValue, sMap.get(newValue) + 1);
//     } else {
//       sMap.set(newValue, 1);
//     }
//   }

//   for (let i = 0; i < t.length; i++) {
//     const newValue = t[i];
//     if (tMap.has(newValue)) {
//       tMap.set(newValue, tMap.get(newValue) + 1);
//     } else {
//       tMap.set(newValue, 1);
//     }
//   }

//   if (sMap.size !== tMap.size) {
//     return false;
//   }
//   for (let [key, val] of sMap) {
//     if (!tMap.has(key)) {
//       return false;
//     } else {
//       if (tMap.get(key) !== val) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// console.log(isAnagram(s, t));

// 125. Valid Palindrome

// const s = " ";
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function (s) {
//   s = s.toLowerCase();
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     const leftCode = s.charCodeAt(left);
//     if (
//       !(leftCode > 47 && leftCode < 58) &&
//       !(leftCode > 96 && leftCode < 123)
//     ) {
//       left++;
//       continue;
//     }
//     const rightCode = s.charCodeAt(right);
//     if (
//       !(rightCode > 47 && rightCode < 58) &&
//       !(rightCode > 96 && rightCode < 123)
//     ) {
//       right--;
//       continue;
//     }
//     if (leftCode !== rightCode) {
//       return false;
//     } else {
//       left++;
//       right--;
//     }
//   }
//   return true;
// };

// console.log(isPalindrome(s));

// 438. Find All Anagrams in a String

// const s = "abab",
//   p = "ab";

// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {number[]}
//  */
// var findAnagrams = function (s, p) {
//   var isAnagram = function (s, t) {
//     const sMap = new Map();
//     const tMap = new Map();
//     for (let i = 0; i < s.length; i++) {
//       const newValue = s[i];
//       if (sMap.has(newValue)) {
//         sMap.set(newValue, sMap.get(newValue) + 1);
//       } else {
//         sMap.set(newValue, 1);
//       }
//     }

//     for (let i = 0; i < t.length; i++) {
//       const newValue = t[i];
//       if (tMap.has(newValue)) {
//         tMap.set(newValue, tMap.get(newValue) + 1);
//       } else {
//         tMap.set(newValue, 1);
//       }
//     }

//     if (sMap.size !== tMap.size) {
//       return false;
//     }
//     for (let [key, val] of sMap) {
//       if (!tMap.has(key)) {
//         return false;
//       } else {
//         if (tMap.get(key) !== val) {
//           return false;
//         }
//       }
//     }
//     return true;
//   };

//   const answer = new Array();

//   for (let i = 0; i < s.length - p.length + 1; i++) {
//     if (isAnagram(s.substring(i, i + p.length), p)) {
//       answer.push(i);
//     }
//   }
//   return answer;
// };

// console.log(findAnagrams(s, p));

// 33. Search in Rotated Sorted Array

// const nums = [4, 6, 7, 8, 9, 10, 2, 3],
//   target = 12;

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function (nums, target) {
//   const findPivot = (nums, start, end) => {
//     //only slice if pivot is in here
//     if (nums[end] < nums[start]) {
//       // if only two elements, the second element is the pivot
//       if (end - start === 1) {
//         return end;
//       }
//       // divide into two
//       const mid = Math.floor((start + end) / 2);
//       // if last is bigger than first of second half, then the pivot is the start of the second half
//       if (nums[mid] > nums[mid + 1]) {
//         return mid + 1;
//       } else {
//         return Math.max(
//           findPivot(nums, start, mid),
//           findPivot(nums, mid + 1, end)
//         );
//       }
//     } else {
//       //no pivot in this section
//       return -1;
//     }
//   };
//   const pivot = findPivot(nums, 0, nums.length - 1);

//   const binarySearch = (array, start, end, target) => {
//     const mid = Math.floor((start + end) / 2);
//     if (array[mid] === target) {
//       return mid;
//     }
//     if (end - start === 0) {
//       return -1;
//     }
//     if (array[mid] < target) {
//       return binarySearch(array, mid + 1, end, target);
//     } else {
//       return binarySearch(array, start, mid, target);
//     }
//   };

//   if (pivot >= 0) {
//     const left = binarySearch(nums, 0, pivot - 1, target);
//     const right = binarySearch(nums, pivot, nums.length - 1, target);
//     return Math.max(left, right);
//   } else {
//     return binarySearch(nums, 0, nums.length - 1, target);
//   }
// };

// console.log(search(nums, target));

// 378. Kth Smallest Element in a Sorted Matrix

// let matrix = [
//   [1, 5, 8],
//   [2, 6, 9],
//   [2, 20, 20],
// ];
// k = 7;

// /**
//  * @param {number[][]} matrix
//  * @param {number} k
//  * @return {number}
//  */
// var kthSmallest = function (matrix, k) {
//   const bubbleSort = (mat, col) => {
//     // console.table(mat);
//     let row = 0;
//     while (row < mat.length && col < mat[row].length) {
//       const current = mat[row][col];
//       // console.log(`current: ${current}`);
//       let nextDown;
//       if (row + 1 < mat.length) {
//         nextDown = mat[row + 1][col];
//       }
//       let nextRight;
//       if (col + 1 < mat[row].length) {
//         nextRight = mat[row][col + 1];
//       }
//       if (!nextDown && !nextRight) {
//         break;
//       }
//       // console.log(nextDown, nextRight);
//       if (nextDown < current || nextRight < current) {
//         if (nextDown <= nextRight || !nextRight) {
//           // swap down
//           // console.log("swap down");
//           mat[row + 1][col] = current;
//           mat[row][col] = nextDown;
//           row++;
//           // console.table(mat);
//         } else {
//           // swap right
//           // console.log("swap right");
//           mat[row][col + 1] = current;
//           mat[row][col] = nextRight;
//           col++;
//           // console.table(mat);
//         }
//       } else {
//         break;
//       }
//     }
//   };

//   // bubbleSort(mat, 0);
//   for (let col = 0; col < matrix[0].length - 1; col++) {
//     for (let row = 0; row < matrix.length; row++) {
//       const checkValue = matrix[row][col];
//       const comparisonValue = matrix[0][col + 1];
//       if (checkValue > comparisonValue) {
//         matrix[row][col] = comparisonValue;
//         matrix[0][col + 1] = checkValue;
//         bubbleSort(matrix, col + 1);
//       }
//     }
//   }

//   // console.log(k);

//   const finalCol = Math.floor((k - 1) / matrix.length);
//   const finalRow = (k - 1) % matrix[0].length;

//   // console.table(matrix);
//   return matrix[finalRow][finalCol];
// };

// console.log(kthSmallest(matrix, k));

// 74. Search a 2D Matrix

// const matrix = [[5], [8]],
//   target = 8;

// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
// var searchMatrix = function (matrix, target) {
//   const valueAt = (index) => {
//     if (index === 0) {
//       return matrix[0][0];
//     }
//     const row = Math.floor(index / matrix[0].length);
//     const col = index % matrix[0].length;
//     return matrix[row][col];
//   };

//   const binarySearch = (start, end) => {
//     const mid = (start + end) >> 1;
//     // console.log(start, end, mid);
//     const midValue = valueAt(mid);
//     // console.log(midValue);
//     if (midValue === target) {
//       return true;
//     }
//     if (end === start) {
//       return false;
//     }
//     if (midValue > target) {
//       return binarySearch(start, mid);
//     } else {
//       return binarySearch(mid + 1, end);
//     }
//   };
//   const end = matrix.length * matrix[0].length;
//   return binarySearch(0, end - 1);
// };

// console.log(searchMatrix(matrix, target));

// 215. Kth Largest Element in an Array

// const nums = [5, 2, 4, 1, 3, 6, 0],
//   k = 7;

// const partition = (array, left, right) => {
//   const swap = (ind1, ind2) => {
//     const temp = array[ind1];
//     array[ind1] = array[ind2];
//     array[ind2] = temp;
//   };
//   const pivot = array[Math.floor((left + right) / 2)];
//   let i = left - 1;
//   let j = right + 1;
//   while (1 == 1) {
//     do {
//       i++;
//     } while (array[i] < pivot);
//     do {
//       j--;
//     } while (array[j] > pivot);
//     if (i >= j) {
//       return j;
//     }
//     swap(i, j);
//   }
// };

// const quickSelect = (array, left, right, k) => {
//   const reverseK = array.length - k;
//   if (left === right && left === reverseK) {
//     return array[left];
//   }
//   if (left >= 0 && right >= 0 && left < right) {
//     const p = partition(array, left, right);
//     console.log(array, p);
//     if (p >= reverseK) {
//       return quickSelect(array, left, p, k);
//     }
//     if (p < reverseK) {
//       return quickSelect(array, p + 1, right, k);
//     }
//   }
// };

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findKthLargest = function (nums, k) {
//   return quickSelect(nums, 0, nums.length - 1, k);
// };

// console.log(findKthLargest(nums, k));

// Quicksort
// const arr = [4, 6, 3, 1, 25, 8];

// const partition = (array, left, right) => {
//   const swap = (ind1, ind2) => {
//     const temp = array[ind1];
//     array[ind1] = array[ind2];
//     array[ind2] = temp;
//   };

//   const pivot = array[Math.floor((left + right) / 2)];
//   console.log(pivot);

//   let i = left - 1;
//   let j = right + 1;

//   while (1 == 1) {
//     do {
//       i++;
//     } while (array[i] < pivot);

//     do {
//       j--;
//     } while (array[j] > pivot);

//     if (i >= j) {
//       return j;
//     }

//     swap(i, j);
//   }
// };

// const quicksort = (array, left, right) => {
//   if (left >= 0 && right >= 0 && left < right) {
//     const p = partition(array, left, right);
//     quicksort(array, left, p);
//     quicksort(array, p + 1, right);
//   }
// };

// quicksort(arr, 0, arr.length - 1);
// console.log(arr);

// 153. Find Minimum in Rotated Sorted Array

// const nums = [11, 13, 15, 17];
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMin = function (nums) {
//   if (nums.length <= 1) {
//     return nums[0];
//   }
//   if (nums[0] < nums[nums.length - 1]) {
//     return nums[0];
//   }

//   const findPivot = (left, right) => {
//     const mid = Math.floor((left + right) / 2);
//     if (nums[mid + 1] < nums[mid]) {
//       return nums[mid + 1];
//     }
//     if (left === right) {
//       return;
//     }
//     if (nums[left] > nums[mid]) {
//       return findPivot(left, mid - 1);
//     } else {
//       return findPivot(mid + 1, right);
//     }
//   };

//   return findPivot(0, nums.length - 1);
// };

// console.log(findMin(nums));

// 4. Median of Two Sorted Arrays

// const nums1 = [1, 3],
//   nums2 = [2];

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function (nums1, nums2) {};

// console.log(findMedianSortedArrays(nums1, nums2));

// 73. Set Matrix Zeroes

// const matrix = [
//   [0, 1, 2, 0],
//   [3, 4, 5, 2],
//   [1, 3, 1, 5],
// ];

// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */
// var setZeroes = function (matrix) {
//   const rowsWithZero = new Set();
//   const colsWithZero = new Set();

//   for (let row = 0; row < matrix.length; row++) {
//     for (let col = 0; col < matrix[0].length; col++) {
//       if (matrix[row][col] === 0) {
//         rowsWithZero.add(row);
//         colsWithZero.add(col);
//       }
//     }
//   }
//   for (let row = 0; row < matrix.length; row++) {
//     for (let col = 0; col < matrix[0].length; col++) {
//       if (rowsWithZero.has(row) || colsWithZero.has(col)) {
//         matrix[row][col] = 0;
//       }
//     }
//   }
// };

// setZeroes(matrix);
// console.log(matrix);

// 54. Spiral Matrix

// matrix = [[1, 2, 4, 8, 5, 2]];

// /**
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
// var spiralOrder = function (matrix) {
//   const answer = [];
//   let firstRow = 0;
//   let firstCol = 0;
//   let lastRow = matrix.length - 1;
//   let lastCol = matrix[0].length - 1;
//   while (answer.length < matrix.length * matrix[0].length) {
//     //go right
//     for (let i = firstCol; i <= lastCol; i++) {
//       answer.push(matrix[firstRow][i]);
//     }
//     firstRow++;
//     //go down
//     for (let i = firstRow; i <= lastRow; i++) {
//       answer.push(matrix[i][lastCol]);
//     }
//     lastCol--;
//     //go left
//     if (firstRow <= lastRow) {
//       for (let i = lastCol; i >= firstCol; i--) {
//         answer.push(matrix[lastRow][i]);
//       }
//       lastRow--;
//     }
//     //go up;
//     if (firstCol <= lastCol) {
//       for (let i = lastRow; i >= firstRow; i--) {
//         answer.push(matrix[i][firstCol]);
//       }
//       firstCol++;
//     }
//   }
//   return answer;
// };

// console.log(spiralOrder(matrix));

// 344. Reverse String

// const s = ["h", "e", "l", "l", "o"];

// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
// var reverseString = function (s) {
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     const temp = s[left];
//     s[left] = s[right];
//     s[right] = temp;
//     left++;
//     right--;
//   }
// };

// reverseString(s);
// console.log(s);

// 48. Rotate Image

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */
// var rotate = function (matrix) {
//   for (let i = 0; i <= matrix.length - 2; i++) {
//     for (let j = i + 1; j <= matrix.length - 1; j++) {
//       const temp = matrix[i][j];
//       matrix[i][j] = matrix[j][i];
//       matrix[j][i] = temp;
//     }
//   }
//   matrix.map((elem) => elem.reverse());
// };

// rotate(matrix);
// console.table(matrix);

// 36. Valid Sudoku

// const board = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
// var isValidSudoku = function (board) {
//   //check rows
//   for (let row = 0; row < board.length; row++) {
//     const checker = new Set();
//     for (let i = 0; i < board[row].length; i++) {
//       if (board[row][i] !== ".") {
//         if (checker.has(board[row][i])) {
//           return false;
//         } else {
//           checker.add(board[row][i]);
//         }
//       }
//     }
//   }

//   //check cols
//   for (let col = 0; col < board[0].length; col++) {
//     const checker = new Set();
//     for (let i = 0; i < board.length; i++) {
//       if (board[i][col] !== ".") {
//         if (checker.has(board[i][col])) {
//           return false;
//         } else {
//           checker.add(board[i][col]);
//         }
//       }
//     }
//   }

//   //check 3x3
//   for (let i = 0; i < board.length; i = i + 3) {
//     for (let j = 0; j < board[0].length; j = j + 3) {
//       const checker = new Set();
//       for (let x = i; x < i + 3; x++) {
//         for (let y = j; y < j + 3; y++) {
//           if (board[x][y] !== ".") {
//             if (checker.has(board[x][y])) {
//               return false;
//             } else {
//               checker.add(board[x][y]);
//             }
//           }
//         }
//       }
//     }
//   }

//   return true;
// };

// console.log(isValidSudoku(board));

// const mercury = [0.33, 88, 57.9];
// const venus = [4.87, 224.7, 108.2];
// const earth = [5.97, 365.2, 149.6];
// const mars = [0.642, 687, 228];
// const jupiter = [1898, 4331, 778.5];
// const saturn = [568, 10747, 1432];
// const uranus = [86.8, 30589, 2867];
// const neptune = [102, 59800, 4515];
// const pluto = [0.013, 90560, 5906.4];

// const planets = [
//   mercury,
//   venus,
//   earth,
//   mars,
//   jupiter,
//   saturn,
//   uranus,
//   neptune,
//   pluto,
// ];

// planets.map((planet) => {
//   planet[0] = Number(`${planet[0]}E24`);
//   planet[1] = Number(`${planet[1] * 24 * 3600}`).toExponential();
//   planet[2] = Number(`${planet[2]}E9`).toExponential();
//   // planet.push(
//   //   (
//   //     (((planet[2] * 2 * Math.PI) / planet[1]) ** 2 / planet[2]) *
//   //     planet[0]
//   //   ).toExponential()
//   // );
// });

// console.table(planets);

// 104. Maximum Depth of Binary Tree

// const root = [3, 9, 20, null, null, 15, 7];

// class TreeNode {
//   constructor(val, left, right) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

// class BinaryTree {
//   constructor(root) {
//     this.root = root ? root : null;
//   }

//   insert(value) {
//     const insert = (value, node) => {
//       if (!node) {
//         return;
//       }

//       if (!node.left) {
//         node.left = new TreeNode(value);
//       } else if (!node.right) {
//         node.right = new TreeNode(value);
//       }
//     };
// const insert = (value, node) => {
//   if (!node) {
//     const newNode = new TreeNode(value);
//     return newNode;
//   } else {
//     const addedLeft = insert(value, node.left);
//     if (addedLeft) {
//       node.left = addedLeft;
//       return addedLeft;
//     } else {
//       const addedRight = insert(value, node.right);
//       node.right = addedRight;
//       return addedRight;
//     }
//   }
// };
// const newNode = insert(value, this.root);
// if (this.root === null) {
//   this.root = newNode;
// }
// return newNode;
//   }

//   bfs() {
//     if (!this.root) {
//       return;
//     }
//     let nodesOnLevel = [];
//     let nextNodes = [];
//     nodesOnLevel.push(this.root);
//     nodesOnLevel.forEach((node) => {
//       nextNodes.push(node);
//       console.log(nextNodes);
//     });
//     nextNodes.forEach((node) => {
//       console.log(node.val);
//     });
//   }

//   delete(value) {}

//   count() {}

//   contains(value) {}

//   height() {}

//   isSearchTree() {}
// }

// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var maxDepth = function (root) {
//   const tree = new BinaryTree();
//   for (let i = 0; i < 10; i++) {
//     tree.insert(i);
//   }
//   console.log(tree.root);
//   tree.bfs();
// };

// console.log(maxDepth(root));

// 383. Ransom Note

// const ransomNote = "bad",
//   magazine = "da";

// /**
//  * @param {string} ransomNote
//  * @param {string} magazine
//  * @return {boolean}
//  */
// var canConstruct = function (ransomNote, magazine) {
//   const magMap = new Map();
//   for (let i = 0; i < magazine.length; i++) {
//     const char = magazine[i];
//     if (magMap.has(char)) {
//       magMap.set(char, magMap.get(char) + 1);
//     } else {
//       magMap.set(char, 1);
//     }
//   }

//   for (let i = 0; i < ransomNote.length; i++) {
//     const char = ransomNote[i];
//     if (!magMap.has(char)) {
//       return false;
//     } else {
//       if (magMap.get(char) > 1) {
//         magMap.set(char, magMap.get(char) - 1);
//       } else {
//         magMap.delete(char);
//       }
//     }
//   }

//   return true;
// };

// console.log(canConstruct(ransomNote, magazine));

// 22. Generate Parentheses

// const n = 3;

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var generateParenthesis = function (n) {
//   const answerSet = new Set();

//   step = (currString, currOpen, currClose) => {
//     if (currString.length === n * 2) {
//       if (currOpen === n) {
//         answerSet.add(currString);
//         return;
//       } else {
//         return;
//       }
//     }
//     if (currOpen < n) {
//       step(currString + "(", currOpen + 1, currClose);
//     }
//     if (currClose < currOpen) {
//       step(currString + ")", currOpen, currClose + 1);
//     }
//   };

//   step("", 0, 0);

//   return Array.from(answerSet);
// };

// console.log(generateParenthesis(8));
