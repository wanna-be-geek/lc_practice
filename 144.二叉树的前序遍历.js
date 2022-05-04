/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// 递归
// var preorderTraversal = function(root) {
//     const res = []
//     const traversal = (node) => {
//         if (!node) return
//         res.push(node.val)
//         traversal(node.left)
//         traversal(node.right)
//     }
//     traversal(root)
//     return res
// };

// 迭代，自己维护一个递归栈，然后根据“先进后出”的特点先右节点push
var preorderTraversal = function(root) {
    const res = []
    if (!root) return res
    const stack = [root]
    let cur = null
    while (stack.length) {
        cur = stack.pop()
        res.push(cur.val)
        if (cur.right) stack.push(cur.right)
        if (cur.left) stack.push(cur.left)
    }
    return res
}
// @lc code=end

