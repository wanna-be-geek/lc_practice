/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/*
判断是否有环
用拓扑排序，BFS，或者用DFS递归
*/
var canFinish1 = function(numCourses, prerequisites) {
    const indegrees = new Array(numCourses).fill(0)
    // 转表,计算入度
    const record = {}
    const len = prerequisites.length
    for (let i =0;i <len ;i++) {
        if (!record[prerequisites[i][0]]){
            record[prerequisites[i][0]] = []
        }
        record[prerequisites[i][0]].push(prerequisites[i][1])
        indegrees[prerequisites[i][1]] = (indegrees[prerequisites[i][1]] || 0) + 1
    }
    //
    const queue = []
    for (let i = 0; i < numCourses; i++) {
        if (indegrees[i] == 0) {
            queue.push(i)
        }
    }
    const res = []
    while (queue.length) {
        const front = queue.shift()
        res.push(front)
        if (record[front]== undefined) {continue}
        for (let num of record[front]) {
            //rudu-1
            indegrees[num] --
            if (indegrees[num] == 0) {
                queue.push(num)
            }
        }
    }
    return res.length == numCourses
};

// DFS
var canFinish = function(numCourses, prerequisites) {
    //维护两个表，visited和path，如果path递归时候为true则代表有环
    const visited = []
    const path = []
  // 1. 构建有向图
  let buildGraph = () => {
    let gh = [];
    for (let [to, from] of prerequisites) {
      if (!gh[to]) gh[to] = [];
      gh[to].push(from);
    }
    return gh; // 邻接表
  };

    let hasCycle = false
    const traverse = (record,i) => {
        if (path.includes(i)) {
            hasCycle = true
        }
        if (hasCycle || visited[i]) {
            return;
        }
        visited[i] = true
        path.push(i)
        if (record[i]== undefined){
            path.pop()
            return
        }
        for(let num of record[i]) {
            traverse(record,num)
        }
        path.pop()
    }
    const record = buildGraph()
    for(let i=0;i<numCourses;i++) {
        traverse(record,i)
    }
    return !hasCycle
}
// @lc code=end

