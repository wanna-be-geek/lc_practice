/*
 * @lc app=leetcode.cn id=886 lang=javascript
 *
 * [886] 可能的二分法
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
// BFS
var possibleBipartition = function(n, dislikes) {
    //1
    const hate = {}
    for (const [one,two] of dislikes) {
        (hate[one] = hate[one] || []).push(two);
        (hate[two] = hate[two] || []).push(one);
    }
    console.log(hate)
    //2 BFS 0为为染色 1，2分别为两个色
    const color = new Array(n + 1).fill(0)
    const visited = new Array(n + 1).fill(0)
    while(!Math.min(...color)) {
        const first = color.indexOf(0)
        const q = [first]
        while(q.length) {
            const num = q.shift()
            color[num] = color[num] == 0 ? 1 : color[num];
            if (hate[num]) {
                if (visited[num]) continue
                visited[num] = 1;
                for (const next of hate[num]) {
                    if (color[next] == color[num]) {return false}
                    else {
                        color[next] = color[num] == 1 ? 2 : 1;
                        q.push(next)
                    }
                }
            }
        }
    }
    return true
};

// @lc code=end

