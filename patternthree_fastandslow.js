// How do you identify when to use the Fast and Slow pattern?

// The problem will deal with a loop in a linked list or array
// When you need to know the position of a certain element or the overall length of the linked list.
// When should I use it over the Two Pointer method mentioned above?

// There are some cases where you shouldn’t use the Two Pointer approach such as in a singly linked list where you can’t move in a backwards direction. An example of when to use the Fast and Slow pattern is when you’re trying to determine if a linked list is a palindrome.
// Problems featuring the fast and slow pointers pattern:

// Linked List Cycle (easy)
// Palindrome Linked List (medium)
// Cycle in a Circular Array (hard)

// Fast & Slow Pointer Pattern (Floyd’s Tortoise & Hare)
// 🔹 When to Use It

// Use this pattern when:

// Linked list cycle detection

// Finding middle of linked list

// Finding start of cycle

// Happy number problem

// Detecting cycles in arrays

// TEMPLETE

// var fastSlowTemplate = function(head) {
//     let slow = head;
//     let fast = head;

//     while (fast && fast.next) {
//         slow = slow.next;          // move 1 step
//         fast = fast.next.next;     // move 2 steps

//         if (slow === fast) {
//             return true;           // cycle detected
//         }
//     }

//     return false;                  // no cycle
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var middleNode = function (head) {
//   let slow = head;
//   let fast = head;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return slow;
// };

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// var hasCycle = function (head) {
//   let slow = head,
//     fast = head;
//   while (fast !== null && fast.next != null) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) {
//       return true;
//     }
//   }
//   return false;
// };

// reset because wanna know where the cycle ByteLengthQueuingStrategy/**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var detectCycle = function(head) {
//     let slow = head , fast = head;
//     while(fast && fast.next){
//         slow = slow.next;
//         fast = fast.next.next
//         if(slow===fast){
//             slow=head
//             while(slow!==fast){
//                 slow=slow.next
//                 fast=fast.next
//             }
//             return slow
//         }

//     }
//   return null
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let values = [];
  let current = head;

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  let left = 0;
  let right = values.length - 1;

  while (left < right) {
    if (values[left] !== values[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
