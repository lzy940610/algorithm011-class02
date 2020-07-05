/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    /**
     * 1、利用队列实现广度优先搜索
     * 2、简化的广度优先搜索
     * 3、递归
     */
  if (!root) return []
  let result = []
  const recursion = (root, level) => {
    if (!result[level]) result[level] = []
    result[level].push(root.val)
    root.children.forEach(children => recursion(children, level + 1))
  }
  recursion(root, 0)
  return result
  
};
// @lc code=end

