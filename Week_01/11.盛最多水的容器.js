/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  /**
   * 题意可理解为 得到 (j - i) * Math.min(Ai,Aj) 的最大值
   * area = Math.min(height[i], height[j]) * Math.abs(j - i)
   * 双层枚举 不重复 代码块
   *  
   for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      // do something
    }
  }
   */
  /**
   * 思路一 暴力破解 枚举 O(n^2)
   * left bar x, right bar y, (y - x) * height_diff  O(n^2)
   */
  // let max = 0
  // for (let i = 0; i < height.length; i++) {
  //   for (let j = i + 1; j < height.length; j++) {
  //     let area = (j - i) * Math.min(height[i], height[j])
  //     max = Math.max(max, area)
  //   }
  // }
  // return max
  /**
   * 思路二 左右边界i,j 向中间收敛 左右夹 从两端收敛 宽度从最宽收敛 记忆模版 O(n)
   * 
   */
  let max = 0
  for (let i = 0, j = height.length - 1; i < j;) {
    let minHeight = height[i] < height[j] ? height[i++] : height[j--]
    let area = (j - i + 1) * minHeight
    max = Math.max(max, area)
  }
  return max

  /**
   * 思路三 
   */
};
// @lc code=end