/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // let result =1
    // if (n <0) {
    //     x= 1/x
    //     n = -n
    // }
    // while (n > 0) {
    //     if (n&1)result *= x
    //     x*=x
    //     n = n>>>1
    // }
    // return result
    if (n === 0) return 1; 
    x = n > 0 ?x : 1/x
    n = n > 0 ? n : -n
    if (n == 1)return x;
    if (n % 2 ===0){
        return myPow(x * x, n/2)
    } else {
        return myPow(x* x,(n-1)/2) *x
    }
};
// @lc code=end

