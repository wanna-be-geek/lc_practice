/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0
    const maxDepth = (node) => {
        if (!node) return 0;
        const leftDepth = maxDepth(node.left)
        const rightDepth = maxDepth(node.right)
        diameter = Math.max(diameter, leftDepth + rightDepth)
        return Math.max(leftDepth, rightDepth) + 1
    }
    maxDepth(root)
    return diameter

};
// @lc code=end

