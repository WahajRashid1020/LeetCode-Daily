// Tree BFS

// This pattern is based on the Breadth First Search (BFS) technique to traverse a tree and uses a queue to keep track of all the nodes of a level before jumping onto the next level. Any problem involving the traversal of a tree in a level-by-level order can be efficiently solved using this approach.

// The Tree BFS pattern works by pushing the root node to the queue and then continually iterating until the queue is empty. For each iteration, we remove the node at the head of the queue and “visit” that node. After removing each node from the queue, we also insert all of its children into the queue.

// How to identify the Tree BFS pattern:

// If you’re asked to traverse a tree in a level-by-level fashion (or level order traversal)
// Problems featuring Tree BFS pattern:

// Binary Tree Level Order Traversal (easy)
// Zigzag Traversal (medium)

// 🧠 How To Remember Template (Memory Trick)

// Think in 4 steps:

// 1. Push root
// 2. While queue not empty
// 3. Freeze size (levelSize)
// 4. Loop levelSize times

// The levelSize freeze is what makes it level-by-level.
// TEMPLATE
// function bfs(root) {
//   if (!root) return [];

//   const result = [];
//   const queue = [root];

//   while (queue.length > 0) {
//     const levelSize = queue.length; // number of nodes in current level
//     const currentLevel = [];

//     for (let i = 0; i < levelSize; i++) {
//       const node = queue.shift(); // remove front node
//       currentLevel.push(node.val); // visit node

//       // push children into queue
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }

//     result.push(currentLevel);
//   }

//   return result;
// }

// 🔥 Pattern Recognition Trigger

// If problem says:

// “Level order”

// “Level by level”

// “Minimum depth”

// “Zigzag”

// “Connect nodes”

// “Right side view”

// Immediately think:

// BFS + Queue

// // Step 1: Create Tree Node class
// class TreeNode {
//   constructor(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// // Step 2: Level Order BFS function
// function levelOrder(root) {
//   if (!root) return [];

//   const result = [];
//   const queue = [root];

//   while (queue.length > 0) {
//     const levelSize = queue.length; // freeze current level size
//     const currentLevel = [];

//     for (let i = 0; i < levelSize; i++) {
//       const node = queue.shift(); // remove front node

//       currentLevel.push(node.val); // visit node

//       // push children for next level
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }

//     result.push(currentLevel);
//   }

//   return result;
// }

// // Step 3: Build Example Tree
// //         3
// //        / \
// //       9   20
// //           / \
// //          15   7

// const root = new TreeNode(
//   3,
//   new TreeNode(9),
//   new TreeNode(
//     20,
//     new TreeNode(15),
//     new TreeNode(7)
//   )
// );

// // Step 4: Run and print result
// const output = levelOrder(root);

// console.log("Level Order Traversal:");
// console.log(output);

// Zigzag
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var zigzagLevelOrder = function(root) {
//     if(!root) return []
//     let res = []
//     let q = [root]
//     let leftright = true
//     while(q.length >0){
//         let curr =[]
//         let n = q.length
//         for(let i =0 ; i < n ;i++){
//             let node = q.shift()
//             if(leftright){
//                 curr.push(node.val)
//             } else {
//                 curr.unshift(node.val)
//             }
//             if(node.left) q.push(node.left)
//             if(node.right) q.push(node.right)

//         }
//         res.push(curr)
//         leftright = !leftright
//     }
//     return res

// };
