/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return "#"
    const left = serialize(root.left)
    const right = serialize(root.right)
    const rootVal = root.val
    return `${left},${right},${rootVal}`
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const treeArr = data.split(',')
    if (!treeArr.length) return null
    return buildTree(treeArr)
};

const buildTree = function(treeArr) {
    const curval = treeArr.pop()
    if (curval == '#') return null
    const node = new TreeNode()
    node.val = curval
    const right = buildTree(treeArr)
    const left = buildTree(treeArr)
    node.left = left
    node.right = right
    return node
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

