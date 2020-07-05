/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */

 /**
  * 1、递归
  * 2、栈
  * 
  */
var preorder = function (root) {
  
  // 递归
  // let result = []
  // const recursion = (root) => {
  //   if(!root) return
  //   result.push(root.val)
  //   root.children.forEach(children => {
  //     recursion(children)
  //   })
  // }
  // recursion(root)
  // return result

  // 栈
  if(!root) return []
  let result = [], stack = [root]
  while (stack.length) {
    root = stack.pop()
    stack.push(...root.children.reverse())
    result.push(root.val)
  }
  return result
};
// @lc code=end

