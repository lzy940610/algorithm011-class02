/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  /**
   * 1、递归 关键找重复性
   * 2、可能情况分析  
   */
  // let answer
  // const recursion = (root, p, q) => {
  //   // recursion terminator
  //   if (!root) return false

  //   // process logic in current level
  //   const lson = recursion(root.left, p, q)
  //   const rson = recursion(root.right, p, q)
  //   if (
  //     (lson && rson) || ((root.val === p.val || root.val === q.val) || (lson || rson))
  //   ) {
  //     answer = root
  //   }
  //   // drill down

  //   // reverse
  //   return lson || rson || (root.val === p.val || root.val === q.val)
  // }
  // recursion(root, p, q)
  // return answer

  /**
   * 
   */
  if (!root || root === p || root === q) return root

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p , q)
  
  if (left && right) return root
    
  return left ? left : right
  
};
// @lc code=end