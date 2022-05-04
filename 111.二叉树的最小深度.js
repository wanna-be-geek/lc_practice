/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
    if (!root) return 0;
    let depth = 1
    const q = [root]
    while (q.length) {
        let size = q.length
        for (let i = 0; i < size; i++) {
            const node = q.shift()
            if (!node.left && !node.right) return depth
            if (node.left) q.push(node.left)
            if (node.right)q.push(node.right)
        }
        depth ++
    }
    return depth
};
// @lc code=end

