/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  // 思路一 暴力双重循环求解
  if (!heights || !Array.isArray(heights)) throw new Error(`Unexpect params ${heights}`)
  if (!heights.length) return 0
  // if (heights.length === 1) return heights.pop()

  // let max = 0
  // for (let i = 0; i < heights.length; i++) {
  //   for (let j = i + 1; j < heights.length; j++) {
  //     let range = heights.slice(i, j + 1)
  //     console.log('range', range)
  //     let minHeight = Math.min(...range)
  //     let area = (j - i + 1) * minHeight
  //     // console.log('i, j, minHeight, area', i, j, minHeight, area)
  //     max = Math.max(max, area)
  //   }
  // }
  // return max
  // 思路一 暴力2 遍历左右边界

  // 思路二 双指针 高度两端收敛 

  // 思路三 栈 Stack 最近相关性
  let stack = []
  let max = 0
  heights = [0, ...heights, 0]
  for (let i = 0; i < heights.length; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) {
      // 当前元素 小于栈顶元素则出栈
      let stackTopIndex = stack.pop()
      max = Math.max(
        max,
        heights[stackTopIndex] * (i - stack[stack.length - 1] - 1)
      )
    }
    // 当前元素 大于栈顶元素 则入栈 存入索引
    stack.push(i)
  }
  return max

};
console.log(largestRectangleArea([0, 9]))
// @lc code=end