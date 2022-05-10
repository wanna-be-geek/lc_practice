/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0, res = Number.MAX_SAFE_INTEGER;
    const traversal = (root) => {
        if (!root) return
        traversal(root.left)
        // TODO:
        count++
        if (count == k){
            res = root.val
            return
        }
        traversal(root.right)
    }
    traversal(root)
    return res
};


// @lc code=end

