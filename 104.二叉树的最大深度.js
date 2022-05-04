/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
//思路1:利用分解问题的思路，在后序遍历位置计算答案
// var maxDepth = function(root) {
//     if (!root) return 0;
//     const leftDepth = maxDepth(root.left)
//     const rightDepth = maxDepth(root.right)
//     return Math.max(leftDepth, rightDepth) + 1
// };


//思路2:利用遍历的思路，设置辅助变量，回溯计算
var maxDepth = function(root) {
    let maxDepth = 0;
    const dfs = (depth,node) => {
        if (!node) {//子节点，计算深度
            maxDepth = Math.max(maxDepth,depth);
            return;
        }
        depth ++
        dfs(depth,node.left);
        dfs(depth,node.right);
        depth --
    }
    dfs(0,root);
    return maxDepth
}
// @lc code=end

