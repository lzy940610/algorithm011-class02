/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort(function(a, b) { return a - b }) //g从小到大排序
  s = s.sort(function(a, b) { return a - b }) //s从小到大排序
  let num = 0 //用于记录能成功满足的数
  let i = 0 //这是孩子胃口数组g的指针
  for (let j = 0; j < s.length; j++) { //j是饼干尺寸数组s的指针
    if (i < g.length && g[i] <= s[j]) { //要保证当前数组g还有没对比到的的元素，还有则开始对比两者大小
      num++ //饼干尺寸满足孩子为空，记录数加一
      i++ //胃口数组指针右移一
    }
  }

  return num //最终返回最大满足数
};
// @lc code=end