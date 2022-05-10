/*
 * @lc app=leetcode.cn id=528 lang=javascript
 *
 * [528] 按权重随机选择
 */

// @lc code=start
/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.sum = [];
    w.forEach((el,i) => {this.sum.push((this.sum[i-1] || 0)+ el) })
    this.total = this.sum[this.sum.length-1]
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let rand = Math.floor(Math.random() * this.total + 1)
    let l = 0,r = this.sum.length
    while (l < r) {
        let mid = l + Math.floor ((r - l)/2)
        if (rand <= this.sum[mid]) r = mid
        else l = mid + 1
    }
    return r
};
// use sum array and binary search
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end

