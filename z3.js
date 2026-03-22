function ListNode(val) {
  this.val = val;
  this.next = null;
}

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // move 1 step
    fast = fast.next.next; // move 2 steps

    if (slow === fast) {
      return true; // cycle found
    }
  }

  return false; // no cycle
}

// 🔧 Create linked list: 1 -> 2 -> 3 -> 4
let head = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);
let fourth = new ListNode(4);

head.next = second;
second.next = third;
third.next = fourth;

// 🔁 Create cycle: 4 -> 2
fourth.next = second;

// 🧪 Test
console.log(hasCycle(head)); // true
