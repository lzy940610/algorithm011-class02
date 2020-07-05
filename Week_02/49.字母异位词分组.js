/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  /**
   * 1、排序数组分类 哈希表
   * 2、数学公理 质数
   * 3、计数
   * 核心关键在于 key 的选定
   */

  // 思路一 哈希表
  // if (!strs.length) return
  // let  map = new Map()
  // for (let i = 0; i < strs.length; i++) {
  //   let key = strs[i].split('').sort().join('')
  //   map.has(key) ? map.get(key).push(strs[i]) : map.set(key, [strs[i]])
  // }
  // return [...map.values()]

  // 思路二 利用数学设计key  质数

  /**
   * 算术基本定理，又称为正整数的唯一分解定理，即：
   * 每个大于1的自然数，要么本身就是质数，要么可以写为2个以上的质数的积，
   * 而且这些质因子按大小排列之后，写法仅有一种方式
   */
  if (!strs.length) return
  let map = new Map()
  for (let i = 0; i < strs.length; i++) {
    // 计算质数相乘 前26位质数 位置不同但最终的值是相同的
    const key = strs[i].split('').reduce((acc, s) => acc * [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103][s.charCodeAt() - 97], 1)
    map.has(key) ? map.get(key).push(strs[i]) : map.set(key, [strs[i]])
  }
  return [...map.values()]


  // 思路三 计数 O(NKlogn)
  // if (!strs.length) return 
  // let map = new Map(), fullArr = new Array(26).fill(0)
  // for (let i = 0; i < strs.length; i++) {
  //   fullArr.fill(0) // 每次loop时候
  //   let str = strs[i]
  //   for (let j = 0; j < str.length; j++) {
  //     fullArr[str.charCodeAt(j) - 97] ++
  //   }
  //   const key = fullArr.join()
  //   map.has(key) ? map.get(key).push(str) : map.set(key, [strs[i]])
  // }
  // return [...map.values()]

};

// @lc code=end