/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//穷举
// var coinChange = function(coins, amount) {
//     const dp = (coins,amount) => {
//         if (amount == 0) return 0;
//         if (amount < 0) return -1;
//         let res = Number.MAX_SAFE_INTEGER
//         for (let coin of coins) {
//             let subproblem = dp(coins, amount - coin)
//             if (subproblem == -1) continue;
//             res = Math.min(res,subproblem+1)
//         }
//         return res == Number.MAX_SAFE_INTEGER ? -1 :res
//     }
//     return dp(coins, amount)
// };

// 带备忘录，这里的amount作为状态，所以最大memo【amount】
// var coinChange = function(coins, amount) {
//     const memo = Array(amount + 1).fill(-666)
//     const dp = (coins,amount) => {
//         if (amount == 0) return 0;
//         if (amount < 0) return -1;
//         if (memo[amount] != -666)return memo[amount] 
//         let res = Number.MAX_SAFE_INTEGER
//         for (let coin of coins) {
//             let subproblem = dp(coins, amount - coin)
//             if (subproblem == -1) continue;
//             res = Math.min(res,subproblem+1)
//         }
//         memo[amount] = res == Number.MAX_SAFE_INTEGER ? -1 :res
//         return memo[amount]
//     }
//     return dp(coins, amount)
// };

// 从递归改成循环，循环类似于填充memo数组
var coinChange = function(coins, amount) {
    const dp = Array(amount+1).fill(amount +1)
    dp[0] = 0
    //外层循环遍历所有状态的取值
    for(let i = 0; i <= amount; i++){
        //内层循环遍历所有选择
        for (let coin of coins){
            //子问题无解，跳过,由于初始值设置了最大，不影响父问题的计算
            if (i - coin < 0)continue
            dp[i] = Math.min(dp[i],1 + dp[i- coin])
        }
    }
    return dp[amount] == amount + 1 ? -1 :dp[amount]
}
// @lc code=end

