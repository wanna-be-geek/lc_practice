/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 分解子问题
// flatten获取拉平后的左右子树，将node右指针指向左子树，右子树接在左子树下
var flatten = function(root) {
    if(root == null) return;
    flatten(root.left)
    flatten(root.right)
    const leftNode = root.left
    const rightNode = root.right
    root.left = null
    root.right = leftNode
    let cur = root
    while(cur.right != null) {
        cur = cur.right
    }
    cur.right = rightNode
};
// @lc code=end

