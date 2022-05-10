/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root == null) return null;
    if (root.val == p.val || root.val == q.val) {
        return root;
    }
    const left = lowestCommonAncestor(root.left,p,q);
    const right = lowestCommonAncestor(root.right,p,q)
        // 后序位置，已经知道左右子树是否存在目标值
    if (left != null && right != null) {
        // 当前节点是 LCA 节点
        return root;
    }
    return left == null ? right :left
};
// @lc code=end

