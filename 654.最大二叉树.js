/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 找到最大值，递归
var constructMaximumBinaryTree = function(nums) {
    const build = (lo,hi) => {
        if (lo > hi) return null
        let index = -1,maxVal = Number.MIN_SAFE_INTEGER
        for (let i = lo;i <= hi;i ++) {
            if (maxVal < nums[i]) {
                maxVal = nums[i]
                index = i
            }
        }
        const node = new TreeNode(nums[index])
        node.left =  build (lo,index- 1)
        node.right = build (index + 1,hi)
        return node
    }
    return build (0,nums.length - 1)
};
// @lc code=end

