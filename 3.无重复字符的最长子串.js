/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //只需要维护一个map
    const windows = {}
    let l=0,r=0,res = 0;
    while(r < s.length) {
        const cur = s[r];
        r++;
        windows[cur] = (windows[cur] || 0) + 1;
        while(windows[cur] > 1) {
            const d = s[l]
            l++;
            windows[d]--;
        }
        res = Math.max(res, r - l);
    }
    return res;
};
// @lc code=end

