/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
//先右后左，遍历，获取降序
var convertBST = function(root) {
    let sum = 0;
    const traversal = (root) => {
        if (!root)return
        traversal(root.right)
        sum += root.val
        root.val  = sum
        traversal(root.left)
    }
    traversal(root)
    return root
};
// @lc code=end

