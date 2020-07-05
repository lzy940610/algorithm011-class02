/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  
  /**
   * 1、递归 recursion
   * 2、栈
   * 3、莫里斯中序
   * 
   * 国际
   * 
   */

  // 1、 递归 recursion
  // let result = []
  // const sort = (root) => {
  //   root.left && sort(root.left)
  //   result.push(root.val)
  //   root.right && sort(root.right)
  // }
  // root && sort(root)
  // return result

  // 2、栈
  let result = [], stack = [], curRoot = root
  while (curRoot || stack.length ) {
    while (curRoot) {
      stack.push(curRoot)
      curRoot = curRoot.left
    }
    curRoot = stack.pop()
    result.push(curRoot.val)
    curRoot = curRoot.right
  }
  return result
};
// @lc code=end