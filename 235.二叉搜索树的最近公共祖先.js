/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
    const val1 = Math.min(p.val,q.val);
    const val2 = Math.max(p.val,q.val);
    return find (root,val1,val2); 
};

const find = (root, val1, val2) => {
    if (root == null) return null
    if (root.val < val1) find(root.right,val1,val2)
    if (root.val > val2) find(root.left, val1, val2)
    return root
}

// @lc code=end

