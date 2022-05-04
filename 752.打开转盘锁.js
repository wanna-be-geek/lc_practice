/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const queue = [];
    const visited = new Set();
    const deads = new Set(deadends);
    let step = 0;
    queue.push("0000");
    visited.add("0000");
    while (queue.length) {
        const levelSize = queue.length
        for (let i = 0; i < levelSize; i++) {
            const cur = queue.shift();
            if (cur === target) return step
            if (deads.has(cur)) continue
            for (let j = 0; j < 4; j++) {
                const up = plusOne(cur,j)
                if (!visited.has(up)) {
                    queue.push(up)
                    visited.add(up)
                }
                const down = minusOne(cur,j)
                if (!visited.has(down)) {
                    queue.push(down)
                    visited.add(down)
                }
            }
        }
        step ++
    }
    return -1
};

const plusOne = (str,j) => {
    let arr = str.split('');
    if (arr[j] == 9) {
        arr[j] = 0
    } else {
        arr[j] ++
    }
    return arr.join('');
}
const minusOne = (str,j) => {
    let arr = str.split('');
    if (arr[j] == 0) {
        arr[j] = 9
    } else {
        arr[j] --
    }
    return arr.join('');
}
// @lc code=end

