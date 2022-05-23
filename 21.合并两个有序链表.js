/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(0,null)
    let curNode = dummy;
    while (list1 && list2) {
        // 选小的
        let isL2Big =  list1.val < list2.val;
        curNode.next = isL2Big ? list1 : list2;
        if (isL2Big) {
            list1 = list1.next
        } else {
            list2 = list2.next
        }
        curNode = curNode.next
    }
    while(list1) {
        curNode.next = list1
        list1 = list1.next
        curNode = curNode.next
    }
    while(list2) {
        curNode.next = list2
        list2 = list2.next
        curNode = curNode.next
    }
    return dummy.next
};
// @lc code=end

