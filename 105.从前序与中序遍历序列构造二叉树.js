/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const indexMap = new Map()
    for (let i = 0; i < inorder.length; i++) {
        indexMap.set(inorder[i], i)
    }
    const build = (preStart,preEnd,inStart,inEnd) => {
        if (preStart > preEnd) return null;
        const root = new TreeNode()
        root.val = preorder[preStart]
        const index = indexMap.get(preorder[preStart])
        const leftSize = index - inStart
        root.left = build(preStart + 1,preStart + leftSize,inStart,index - 1)
        root.right = build(preStart + leftSize + 1,preEnd,index + 1,inEnd)
        return root
    }
    return build(0,preorder.length-1,0,inorder.length-1)
};

// @lc code=end

