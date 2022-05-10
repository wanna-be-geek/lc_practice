/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */


// bubble sort O(N^2),O(1)
// var sortArray = function(nums) {
//     let count = 0;
//     for (var i = nums.length - 1; i > 0; i--) {
//         for (var j =0;j < i;j ++) {
//             count++
//             if (nums[j] > nums[j+1]) {
//                 [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
//             }
//         }
//     }
//     return nums;
// }

// 插入排序，O（N^2）,O(N)
//  var sortArray = function(nums) {
//      for (let i = 1;i < nums.length;i++) {
//          let temp = nums[i]
//          let j = i
//          while(j > 0 && nums[j-1] > temp) {
//              nums[j] = nums[j-1]
//              j--
//          }
//          nums[j] = temp
//      }
//      return nums
//  }

//归并排序，O（NlogN），O（N）
// var sortArray = function(nums) {
//     const temp = Array(nums.length)
//     const merge = function(lo, mid, hi) {
//         for(let i = lo; i <= hi; i++) {
//             temp[i]= nums[i]
//         }
//         //two pointers
//         let i = lo,j = mid +1
//         for (let p = lo; p <= hi; p++) {
//             if (i == mid +1) {
//                 nums[p] = temp[j++]
//             } else if (j == hi + 1) {
//                 nums[p] = temp[i++]
//             } else if(temp[i] <= temp[j]) {
//                 nums[p] = temp[i++]
//             } else {
//                 nums[p]= temp[j++]
//             }
//         }
//     }
//     const sort = (nums,lo,hi) => {
//         if (lo == hi)return
//         const mid = Math.floor(lo + (hi - lo) / 2) 
//         sort (nums,lo,mid)
//         sort (nums,mid + 1,hi)
//         merge (lo,mid,hi)
//     }
//     sort(nums,0,nums.length - 1)
//     return nums
// };

// 快排
//相当于前序遍历，先排序自己，然后遍历子数组
//优化：选取随机数作为pivot
//O(NlogN)~O(N^2),O(logN)

// basic
// var sortArray = function(nums) {
//     let pivot = nums[0]
//     const left = [],right = []
//     if (nums.length < 2) return nums
//     for (let i = 1;i <nums.length;i++) {
//         pivot < nums[i] ? right.push(nums[i]) : left.push(nums[i])
//     }
//     return sortArray(left).concat([pivot], sortArray(right))
// }

var sortArray = function(nums) {
    const quickSort = (nums,start,end) => {
        if (end - start < 1) return 
        let index = partition(nums,start,end)
        quickSort(nums,start,index - 1)
        quickSort(nums,index + 1,end)
    }
    const partition = (nums,start,end) => {
        let base = nums[start]
        let left = start + 1
        let right = end
        while(left < right) {
            //只要left小于base，++
            while (left < right && nums[left] < base)left ++
            if (left != right) {
                [nums[left],nums[right]] = [nums[right],nums[left]]
                right --
            }
        }
        if (left == right) {
            if (nums[right] > base){
                right--
            }
        }
        [nums[start],nums[right]] = [nums[right],nums[start]]
        return right
    }
    quickSort(nums,0,nums.length - 1)
    return nums
}
// @lc code=end

