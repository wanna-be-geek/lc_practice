/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 维护左右指针[left,right)，s和t分别存到hashmap里面，【字母。出现次数】
// 遍历,右指针++,判断是否不满足要求
// var minWindow = function(s, t) {
//     let left =0,right =0;
//     let res =""
//     let len = Number.MAX_SAFE_INTEGER,start = 0
//     let size = 0
//     let need = new Map();
//     let window = new Map()
//     for (var i = 0; i <t.length;i++) {
//         need.set(t[i],need.has(t[i]) ?  need.get(t[i]) +1 : 1)
//     }
//     while (right < s.length) {
//         const cur = s[right]
//         right++
//         if (need.has(cur)) {
//             window.set(cur,window.has(cur) ? window.get(cur) +1 : 1)
//             if (window.get(cur) == need.get(cur))size ++
//         }

//         while (size == need.size) {
//             const old = s[left]
//             if (right - left < len) {
//                 start = left
//                 len = right - left
//                 console.log(left+","+right)
//             }
//             left ++
//             if (need.has(old)) {
//                 if (window.get(old) == need.get(old))size --
//                 window.set(old,window.has(old) ? window.get(old) - 1 : 1)
//             }
//         }
//     }
//     return len == Number.MAX_SAFE_INTEGER ? "" : s.slice(start,start + len)
// };

// 优化，利用object
var minWindow = function(s, t) {
    let l = 0,r = 0,res = "",map = new Map();
    let windows = {},needs = {},start = -1,count = 0,minLen = Infinity

    t.split("").forEach(c => needs[c] ? needs[c]++ : needs[c] = 1)
    let keyLen = Object.keys(needs).length
    while(r < s.length) {
        let c1 = s[r++]
        windows[c1] ? windows[c1]++ :windows[c1] = 1
        if (needs[c1] == windows[c1])count ++ //c1 个数对了
        while(count == keyLen) {
            if (r - l < minLen) {
                minLen = r - l
                start = l
            }
            let c2 = s[l++]
            if (needs[c2] == windows[c2]--) {
                count --
            }
        }
    }
    return start == -1 ? "" : s.substring(start,minLen + start)
}
console.log(minWindow("ADOBECODEBANC","ABC"))
// @lc code=end

