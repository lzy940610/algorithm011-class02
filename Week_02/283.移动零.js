/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 1. loop count 
  // 2. filter fill zero
  // 3. index
  /* 方法一 count 记录0的个数 80ms
  let len = nums.length,
    count = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i]) {
      nums[i - count] = nums[i]
    } else {
      count++
    }
  }
  for (let j = len - count; j < len; j++) {
    nums[j] = 0
  }
  */

  /**
   * 方法二 双指针 一维数组的坐标变换 i j 不断维护
   */
  let j = 0,
    temp;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp = nums[j]
      nums[j] = nums[i]
      nums[i] = temp
      j++
    }
  }
};
// @lc code=end