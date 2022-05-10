/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    //左右子树维护最大值和最小值node
    const traversal = (node,min,max) => {
        if (node == null) return true;
        if (min && node.val <= min.val) return false
        if (max && node.val >= max.val) return false
        return traversal(node.left, min,node) 
        && traversal(node.right,node,max)
    }
    return traversal(root,null,null)
};
// @lc code=end

