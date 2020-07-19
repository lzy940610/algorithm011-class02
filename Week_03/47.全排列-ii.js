/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (!nums) return

  nums.sort((a, b) => a - b);
  let res = []
  const swap = (nums, i, j) => {
    if (i === j) return
    const t = nums[i]
    nums[i] = nums[j]
    nums[j] = t
  }

  const cal = (nums, first, result) => {
    if (nums.length === first) {
      result.push([...nums])
      return
    }

    const map = new Map();
    for (let i = first; i < nums.length; i++) {
      if (!map.get(nums[i])) {
        map.set(nums[i], true)
        swap(nums, first, i)
        cal(nums, first + 1, result)
        swap(nums, first, i)
      }
    }
  }

  cal(nums, 0, res)
  return res

};
// @lc code=end