/*
 * @lc app=leetcode.cn id=785 lang=javascript
 *
 * [785] 判断二分图
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */

//dfs
var isBipartite = function(graph) {
    const color = []
    const visited = []
    let ok = true
    const traverse = (i) => {
        if (!ok) return
        visited[i] = true
        if (!graph[i]) return
        let nums = graph[i];
        let currColor = color[i] || false;
        for (let next of nums) {
            if (!visited[next]) {
                color[next] = !currColor
                traverse(next)
            } else {
                if (color[next] == currColor) {
                    ok = false
                    return;
                }
            }
        }
    }
    for (let i = 0; i < graph.length;i++) {
        traverse(i)
    }
    return ok
};
// @lc code=end

