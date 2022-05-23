/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

};
var printNumbers = function(n) {
    const res = []
    const dfs = (index,nums) => {
        if (index == n) {
            res.push(parseInt(nums.join("")))
            return 
        }
        for (let i = 0;i < 10;i++) {
            nums.push(i)
            dfs(index+1,nums)
            nums.pop()
        }
    }
    dfs(0,[])
    res.shift()
    return res
};

function ListNode(val) {
    this.val = val
    this.next = null
}

let head = new ListNode(2)
head.next = new ListNode(3)
head.next.next = new ListNode(4)
let dNode = head.next.next
var deleteNode = function(node,dNode) {
    if (!node || !dNode) {return}
    if (dNode.next) {
        let nextNode = dNode.next
        dNode.val = nextNode.val
        dNode.next = nextNode.next
    } else if (dNode == node) {
        node = null
    } else {
        let head = node;
        while (head.next!=dNode) {head = head.next}
        head.next = null;
    }
}
deleteNode(head,dNode)

var exchange = function(nums) {
    let start = 0,end = nums.length - 1
    const numIsEven = (nums,index) => {
    if (nums[index]%2 == 0)return true
    return false
    }
    while(start < end) {
        while (start < end && !numIsEven(nums,start)) start++
        while (start < end && numIsEven(nums,end)) end--
        [nums[start],nums[end]] = [nums[end],nums[start]]
    }
    return nums
};
console.log(exchange([1,2,3,4]))

// @lc code=end

