/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
        //两个map
        const windows = {},need = {}
        let l=0,r=0,count = 0;
        for (var i = 0; i < s1.length; i++) {
            need[s1[i]] ? need[s1[i]]++ : need[s1[i]] = 1
        }
        while (r < s2.length) {
            const cur = s2[r]
            r++
            if (need[cur]) {
                windows[cur] ? windows[cur]++ : windows[cur] = 1
                if (windows[cur] === need[cur]) {
                    count++
                }
            }
            while (count === Object.keys(need).length) {
                //更新参数
                if (r - l == s1.length) {
                    return true
                }
                const d = s2[l]
                l++
                if (need[d]) {
                    if (need[d]== windows[d]) {
                        count --
                    }
                    windows[d]--
                }
                
            }
        }
        return false
};
console.log(checkInclusion("ab","eidboaoo"))
// @lc code=end

