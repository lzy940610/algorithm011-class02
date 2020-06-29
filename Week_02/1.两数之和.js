/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 思路一 暴力破解 双循环 不重复
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j]
  //     }
  //   }
  // }
  // return []


  // 思路二 借助哈希表查询
  let map = {}
  nums.forEach((value, index) => map[value] = index)
  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i]
    if (map[key] && map[key] !== i) {
      return [i, map[key]]
    }
  }
  return []
};
// @lc code=end