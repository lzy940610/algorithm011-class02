/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  /**
   * 丑数就是只包含质因数 2, 3, 5 的正整数
   * 任何一个丑数 可以表示为 n = 2^i * 3 ^j * 5^k , i、j、k都都是幂
   * 逆向思维 我们累除 当能[2, 3, 5]被整除 就继续除下去 直到最终结果为1
   */
  if (num < 1) return false
  for (const factor of [2, 3, 5]) {
    while (num % factor === 0) num /= factor  
  }
  return num === 1
};
// @lc code=end

