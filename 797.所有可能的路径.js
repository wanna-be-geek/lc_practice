/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let n = graph.length;
    const res = [];
    const find = (graph,s,path) => {
        path.push(s);
        if (s == n-1) {
            res.push(path.concat([]));
        }
        for (let i of graph[s]) {
            find(graph,i,path)
        }
        path.pop()
    }
    find(graph,0,[])
    return res;
};
// @lc code=end

