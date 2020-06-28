/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  /**
   * 为什么这个题目可以用栈来解决
   * 什么样的题目可以用栈来解决？
   * 具有最近相关性
   */

  // 思路一 暴力求解 不断replace匹配的括号 --> ""

  // 思路二 Stack + hash
  // const hash = { '(': ')', '{': '}', '[': ']' }
  // let stack = []
  // for (let c of s) {
  //   if (c in hash) stack.push(c)
  //   else if (hash[stack.pop()] !== c) return false
  // }
  // return !stack.length

  // 思路二 优化 入栈反
  // let stack = []
  // for (let c of s) {
  //   if (c === '(') {
  //     stack.push(')')
  //   } else if (c === '{') {
  //     stack.push('}')
  //   } else if (c === '[') {
  //     stack.push(']')
  //   } else if (stack.pop() !== c) {
  //     return false
  //   }
  // }
  // return !stack.length

  const dic = { '(': ')', '[': ']', '{': '}' }
  let stack = []
  for (let c of s) {
    if (c in dic) {
      stack.push(c)
    } else if (dic[stack.pop()] !== c) {
      return false
    }
  }
  return !stack.length
};
console.log(isValid('()'))
// @lc code=end