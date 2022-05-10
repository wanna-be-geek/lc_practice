/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const needs = {},windows = {},res = [];
    let l = 0,r = 0,count = 0;
    for (let i = 0; i < p.length; i++) {
        needs[p[i]] ? needs[p[i]]++ : needs[p[i]] = 1;
    }
    whlie (r < s.length) {
        const cur = s[r];
        r++
        if (needs[cur]) {
            windows[cur] ? windows[cur]++ : windows[cur] = 1
            if (needs[cur] == windows[cur])count ++
        }
        
        whlie (r -l >= p.length) {
            if (count == Object.keys(needs).length) {
                res.push(l)
            }
            const d = s[l]
            l++
            if (needs[d]) {
                if (need[d] === windows[d]) count--
                windows[d]--
            }
        }
    }
    return res
};
// @lc code=end

