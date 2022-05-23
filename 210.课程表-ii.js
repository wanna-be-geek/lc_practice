/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    //BFS
    //1
    const record = [];
    const indegrees = new Array(numCourses).fill(0)
    for (let [from,to] of prerequisites) {
        if (!record[to])record[to] = [];
        record[to].push(from);
        indegrees[from]++
    }
    //2 
    const queue = []
    indegrees.forEach((el,i) => {
        if (el == 0) queue.push(i)
    })
    //3 
    const res= []
    while (queue.length) {
        const cur = queue.shift()
        res.push(cur)
        // 入度-1
        if (!record[cur])continue
        for (let next of record[cur]){
            indegrees[next]--
            console.log(indegrees[next])
            if (indegrees[next] == 0)queue.push(next)
        }
    }
    if (res.length!= numCourses)return []
    return res;
};
// @lc code=end

