/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 巧用 reduce 方法
var findMin = function(nums) {
  return nums.reduce((t, cur) => {
    t = t < cur ? t : cur
    return t
  }, nums[0])
};

// 升序旋转 => i-1 > i 
// var findMin = function(nums) {
//   let i = 1;
//   while( i < nums.length ){
//       if( nums[i-1] > nums[i]) return nums[i]
//       i++
//   }
//   return nums[0]
// };


// @lc code=end