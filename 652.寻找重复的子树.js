/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */

// 拆分子问题，对于一个节点，关注两个问题
//1. 我的子树长什么样子
//2.其他节点的子树长什么样子，和我重复吗
var findDuplicateSubtrees = function(root) {
    const visited = new Map();
    const res = []
    const traversal = (node) => {
        if (!node) return "#"
        const left = traversal(node.left)
        const right = traversal(node.right)
        const rootVal = node.val
        const subStr = `${left},${right},${rootVal}`
        const count = visited.get(subStr)
        if (count == 1)res.push(node)
        visited.set(subStr,(count || 0) + 1)
        return subStr
    }
    traversal(root)
    return res
};

// @lc code=end

