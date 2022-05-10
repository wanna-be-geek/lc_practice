/*
 * @lc app=leetcode.cn id=1373 lang=javascript
 *
 * [1373] 二叉搜索子树的最大键值和
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
var maxSumBST = function(root) {
    let maxSum = 0
    const traverse = (root) => {
        if (!root) return [1,Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,0]
        const left = traverse(root.left)
        const right = traverse(root.right)
        const res = Array(4).fill(0)
        if (left[0] && right[0] && left[2] < root.val && root.val < right[1]) {
            res[0] = 1
            res[1] = Math.min(root.val,left[1])
            res[2] = Math.max(root.val,right[2])
            res[3] = left[3] + right[3] + root.val
            maxSum = Math.max(maxSum,res[3])
        } else {
            res[0] = 0
        }
        return res
    }
    traverse(root)
    return maxSum
};
// @lc code=end

