/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  /**
   * 什么是异位词？ 字母都是一样的 但顺序不一样
   * 1、clarification
   * 2、possible solutions --> optimal（time & space）
   * 3、code
   * 4、test cases
   */

  /**
   * 1、暴力 sort -- > sorted_str 相等？ O(NlogN)
   * 2、hash，map -->统计每个字符的频次 使用256字母
   * 3、
   */

  // 1、先排序 在比较
  // const sortStr = (s) => [...s].sort().join('')
  // return sortStr(s) === sortStr(t)

  // 2、 hash 统计
  // let map = new Map()
  // for (let c of s) {
  //   if (!map.has(c)) {
  //     map.set(c, 1)
  //   } else {
  //     map.set(c, map.get(c) + 1)
  //   }
  // }
  // for (let c of t) {
  //   if (map.has(c)) {
  //     map.set(c, map.get(c) - 1)
  //     if(!map.get(c)) map.delete(c)
  //   } else {
  //     return false
  //   }
  // }
  // return !map.size

  // 3、 因为都是小写字母可以
  if (s.length !== t.length) return false
  if (s === t) return true
  const map = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i) - 97] ++
    map[t.charCodeAt(i) - 97] --  
  }
  return !map.some(Boolean)
    
  
};
console.log('isAnagram', isAnagram('anagram', 'nagaram'))
// @lc code=end

