/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
//最长回文子串，从左到右依次遍历
// 对于s【i】，right = i,
// if s[i] == s[right],right++
// 由于s[i] == s[right],这两个指针内回文， left = i-1 ,比较s[left] == s[right +1],相等继续累加
// 获取到以i为中点的最长回文子串，对比获得最长子串
var longestPalindrome = function(s) {
    let maxSubstring_start = 0 
    let maxSubstring_length = 1;
    for (let i = 0; i < s.length; i++) {
        let right = i
        while (right < s.length && s[right] == s[i]) right++
        let left = i - 1
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            left--
            right++
        }
        if (maxSubstring_length < right - left - 1) {
            maxSubstring_length = right - left - 1
            maxSubstring_start = left + 1
        }
    }
    return s.slice(maxSubstring_start, maxSubstring_start + maxSubstring_length)
};

// @lc code=end

