/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
//本质是一个三叉树的递归
var connect = function(root) {
    const traversal = (node1,node2) => {
        if (!node1 || !node2) return
        node1.next = node2
        traversal(node1.left,node1.right)
        traversal(node2.left,node2.right)
        traversal(node1.right,node2.left)
    }
    if (!root) return null
    traversal(root.left,root.right)
    return root;
};
// @lc code=end

