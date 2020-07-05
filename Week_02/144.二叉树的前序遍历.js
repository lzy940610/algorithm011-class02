/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  /**
   * 1、递归
   * 2、栈
   */

  // 递归 recursion
  // let result = []
  // const recursion = (root) => {
  //   // 前序 根 左 右
  //   result.push(root.val)
  //   root.left && recursion(root.left)
  //   root.right && recursion(root.right)
  // }
  // root && recursion(root)
  // return result

  // 栈 stack
  if(!root) return []
  let result = [], stack = [root]
  while (stack.length) {
    root = stack.pop()
    result.push(root.val)
    // 为什么 是左子树 先入栈 右子树后入栈呢？
    // 因为 出栈顺序是 先进后出 出栈时是左子先出栈 右子树后出栈
    root.right && stack.push(root.right)
    root.left && stack.push(root.left)
  }
  return result
};
// @lc code=end

