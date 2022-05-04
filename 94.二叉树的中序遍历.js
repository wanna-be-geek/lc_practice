/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 两种思路：递归或者迭代
//递归可以分为遍历（回溯）或者带参数的（动态规划）
var inorderTraversal = function(root) {
    const res = []
    const traversal = (node) => {
        if (!node) return
        traversal(node.left)
        res.push(node.val)
        traversal(node.right)
    }
    traversal(root)
    return res
};
// @lc code=end

