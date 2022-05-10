/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let minSpeed = 1;
    let maxSpeed = Math.max(...piles)
    while (minSpeed <= maxSpeed) {
        let curSpeed = minSpeed + Math.floor((maxSpeed - minSpeed)/2)
        let hours = 0
        for (let pile of piles) hours += Math.ceil(pile/curSpeed)
        if (hours <= h) maxSpeed = curSpeed - 1
        else minSpeed = curSpeed + 1
    }
    return minSpeed
};
// @lc code=end

