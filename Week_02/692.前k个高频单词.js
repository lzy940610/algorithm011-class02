/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  /**
   * 根据题意
   * 过滤出前k个高频单词 & 相同次数时按照字符顺序排序
   * 本质 就是排序 k只是选出多少而已
   * 1、暴力破解 排序
   * 4、二叉堆 数组展示
   */

  // 排序
  if (!words) return []
  let map = new Map()
  for (const word of words)
    map.set(word, map.has(word) ? map.get(word) + 1 : 1)
  // 先排序再取值 
  let sort = [...map].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  return sort.map(([word]) => word).slice(0, k)


};
// @lc code=end