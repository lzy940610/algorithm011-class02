/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  /**
   * 无序数组 整体平移 O(1)
   * 1、 暴力 分割再拼接 空间复杂度不为O(1) pass
   * 2、 双指针 
   * 3、 deque 双端队列
   */
  if (!Array.isArray(nums)) throw new TypeError(`${nums} is not array`)
  if (!k) return nums
  k = k % nums.length
  // 思路一 暴力破解 
  // let left = nums.slice(0, nums.length - k)
  // let right = nums.slice(nums.length - k)
  // return [...right, ...left]

  // 思路二 双层循环 O(n * k)
  // let temp, prev
  // for (let i = 0; i < k; i++) {
  //   prev = nums[nums.length - 1]
  //   for (let j = 0; j < nums.length; j++) {
  //     temp = nums[j]
  //     nums[j] = prev
  //     prev = temp
  //   }
  // }
  // return nums

  // 思路二 新增一个数组 O(n) O(n) 不符合题意
  // let result = []
  // for (let i = 0; i < nums.length; i++) {
  //   if (i < nums.length - k) {
  //     result.push(nums[i])
  //   } else {
  //     result.unshift(nums[nums.length - (i - k)])
  //   }
  // }
  // return result

  // 思路三 双端队列 O(k) O(1)
  // if (!Array.isArray(nums)) throw new TypeError(`${nums} is not array`)
  // if (!k) return nums
  // k = k % nums.length
  // for (let i = 0; i < k; i++) {
  //   nums.unshift(nums.pop())
  // }
  // return nums

  // 思路四 环形替换
  let count = 0, // 记录交换位置的次数 n个同学一共需要更换n次
    len = nums.length
  for (let start = 0; count < len; start++) {
    let cur = start,
      pre = nums[cur]
    do {
      let next = (cur + k) % len,
        temp = nums[next]
      nums[next] = pre
      pre = temp
      cur = next
      count++
    } while (start !== cur)

  }
  return nums

  // 思路五 多次反转
  // const reverse = (nums, start, end) => {
  //   while (start < end) {
  //     let temp = nums[start]
  //     nums[start] = nums[end]
  //     nums[end] = temp
  //     start++
  //     end--
  //   }
  // }
  // reverse(nums, 0, nums.length - 1)
  // reverse(nums, 0, k - 1)
  // reverse(nums, k, nums.length - 1)
  // return nums

};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))


// @lc code=end