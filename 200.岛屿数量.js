/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    let row = 0, col = 0
    const maxRow = grid.length,maxCol = grid[0].length
    const dfs = (row,col) => {
        if (row >= maxRow || col >= maxCol || row < 0 || col < 0 || grid[row][col] == '0') return
        grid[row][col] = '0'
        dfs(row + 1,col)
        dfs(row - 1,col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }
    while (row < maxRow) {
        let current = grid[row][col];
        if (current == '1') {
            count ++
            dfs(row,col)
        }
        if (col < maxCol) {
            col ++
        } else {
            row ++
            col = 0
        }
    }
    return count
};

// @lc code=end

