/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  /**
   * 题意 找出无序数组中 三数之和等于0的所有不重复三元组
   * [1, 2, 3] 123 1个元组
   * [1, 2, 3, 4] 123 124 234  341 4个元组
   * [1, 2, 3, 4, 5] 123 124 125 234 235 341 345 451 452  10个元组
   * a + b = -c (target)
   * 面试时候 加上参数检查
   */
  if (!nums || !Array.isArray(nums) || nums.length < 3) return []
  nums.sort((a, b) => a - b)
  let result = []
  // 思路一 暴力求解 三层循环
  // for (let i = 0; i < len - 2; i++) {
  //   for (let j = i + 1; j < len - 1; j++) {
  //     for (let k = j + 1; k < len; k++) {
  //       // console.log(nums[i], nums[j], nums[k])
  //       if (nums[i] + nums[j] + nums[k] === 0) {
  //         let cell = [nums[i], nums[j], nums[k]].sort()
  //         // console.log('ss cell, :', cell)
  //         result.push(cell.toString())
  //       }
  //     }
  //   }
  // }
  // const deduplicateResult = (result) => {
  //   if (!result.length) return []
  //   let validResult = []
  //   new Set(result).forEach(item => validResult.push(item.split(',').map(Number)))
  //   return validResult
  // }


  // return deduplicateResult(result)

  // 思路二 两种循环 + hash
  // let map = {}
  // nums.forEach((item, index) => map[item] = index)

  // for (let i = 0; i < len - 1; i++) {
  //   for (let j = i + 1; j < len; j++) {
  //     let key = nums[i] + nums[j]
  //     console.log('key, map[key]', key, map[key])
  //     // 带来排序问题
  //     if (map[-key] && map[key] !== i && map[key] !== j) {
  //       result.push([nums[i], nums[j], key])
  //     }
  //   }
  // }


  // 思路三 双指针 
  for (let k = 0, len = nums.length; k < len; k++) {
    // 因为有升序 后面都是正数 三数之和不可能再为0
    if (nums[k] > 0) break
    // 去重
    if (k > 0 && nums[k] === nums[k - 1]) continue
    // 定义两端指针游标 l ：left point r：right point 双端紧逼
    let l = k + 1,
      r = len - 1
    while (l < r) {
      const sum = nums[k] + nums[l] + nums[r]
      if (sum < 0) l++
      if (sum > 0) r--
      if (!sum) {
        result.push([nums[k], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r--
        l++
        r--
      }
    }
  }
  return result

};
// console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]))
// @lc code=end