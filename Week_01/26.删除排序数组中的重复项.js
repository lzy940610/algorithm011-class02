/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  /**
   * 1、题意 数组去重 且 保持有序
   * 2、可能的解法
   *  2.1 使用特殊数据结构去重 Set 但是空间复杂度 不为O(1) 所以pass
   *  2.1 暴力求解 双指针
   *  2.2 栈 遇到同样入栈一个 不同则继续 保持顺序 用了新的数据结构也不行 pass
   * 3、coding
   * 4、test cash
   */

  // 思路一 双指针 所谓快慢指针 不相等则 将nums[j] 与 nums[i + 1]交换
  if (!Array.isArray(nums)) throw new TypeError(`${nums} is not a array`)
  if (!nums.length) return 0
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    /**
     * j > i 避免无谓的替换 比如 [0, 1, 2, 3, 4, 5]
     * 一个没有重复项的数组 若不优化则需要替换n次
     * 优化后 没有重复项的数组 替换次数降低为0
     * ++i 节省一步 前置累加
     */
    if (nums[i] !== nums[j] && j > i) {
      nums[++i] = nums[j]
    }
  }
  return i + 1

  // 思路二 



};
// @lc code=end