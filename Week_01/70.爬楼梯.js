/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
  // 方法一 递归暴力求解
  // if (n <= 2) return n
  // return climbStairs(n - 1) + climbStairs(n - 2)

  // 方法二 移动数组 前两位前移 末位求和
  let p = 0,
    q = 0,
    r = 1
  for (let i = 0; i < n; i++) {
    p = q
    q = r
    r = p + q
  }
  return r

  // 方法三 数学 利用斐波那契额通项公式
  // const sqrt_5 = Math.sqrt(5)
  // const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2, n + 1)
  // return Math.round(fib_n / sqrt_5)

  // 方法四 动态规划 分解为小问题
  // let dp = [1, 1]
  // for (let i = 3; i < n; i++) {
  //   dp[i] = dp[i - 1] + dp[i - 2]
  // }
  // return dp[n]
};
// @lc code=end