/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  /**
   * 滑动窗口 queue 双端队列
   * 
   */
  console.log('nums, k', nums, k)
  // 思路一 暴力 O(n*k)
  // if (k < 2) return nums
  // let result = []
  // for (let i = 0; i < nums.length - k + 1; i++) {
  //   // 获取可视窗口数组
  //   let arr = nums.slice(i, i + k)
  //   // 找到最大值
  //   let max = Math.max(...nums.slice(i, i + k))
  //   // 存入
  //   result.push(max)
  // }
  // return result

  // 思路二 queue O(n) 或 双端队列
  if (Array.isArray(nums) && !nums.length) return []
  if (k < 2) return nums
  let deque = []
  let res = new Array(nums.length - k + 1)
  // 未形成窗口
  for (let i = 0; i < k; i++) {
    while (deque.length && deque.shift() < nums[i]) deque.pop()
    deque.push(nums[i])
  }

};
maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
// @lc code=end