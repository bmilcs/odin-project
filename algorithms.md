# Algorithm Cheatsheet

1. Merge Sort

## Merge Sort

Worst-case: `O (n log n)`

1. Split a list into ~2 halves
2. Continue dividing subarrays until left with single element arrays `[2]` `[5]`
3. Merge subarrays in a sorted order, starting with single element arrays
4. Merge the rest of the subarrays by their 1st index

![Merge Sort](./img/algo-mergesort.jpg)

```js
const merge = (left, right) => {
  let arr = [];

  // while both left/right have elements left, add them
  // in sorted order to `arr`
  while (left.length && right.length) {
    left[0] < right[0]
      ? arr.push(left.shift()) // shift: return 1st element & rm it from orig. array
      : arr.push(right.shift());
  }
  // return sorted array & any leftover elements
  // at this point, any leftover elements are already sorted & larger than the last element in 'arr'
  return [...arr, ...left, ...right];
};

const mergeSort = (array) => {
  // base case: single element arrays
  if (array.length < 2) return array;

  // find middle element
  const mid = array.length / 2;

  // remove left side of array
  // leaving right side in 'array' variable
  const left = array.splice(0, mid);

  // magic:
  return merge(mergeSort(left), mergeSort(array));
};
```

## Binary Search

Binary Search is a divide & conquer algorithm for searching an array.

- Requires a **sorted** array
- Reduces search area by half each time

Best case: `O 1`
Worst case: `log n`

Instructions:

- Repeat until subarray is size 0 (base case)
  - When start point > end point
- Calculate mid point of current array
- If search target = midpoint, stop
- If target < midpoint, repeat, changing end point to be just left of middle
- If target > midpoint, repeat, start point to be just right of the middle

Information needed:

- Target
- Start point
- End point
- Mid point

## Binary Search Tree

![Binary Search Tree](./img/algo-binary-search-tree.png)

Root node

- If less than root node, the next number goes to left
- If more than root node, the next number goes to right
- If equal to root node, the next number goes to right
  - Equal to = greats treated as "not less than"

## Binary Tree Traversal

Binary tree traversal is:

- Process of visiting each node in the tree
- Exactly once
- In some order

> Visiting: Reading & processing data in a node

Binary tree's are not a linear data structure.

From each node, there are 2 possible directions you can travel.

Tree traversal can be classified by two categories:

              A
            /   \
          D       J
         / \     / \
        B   E   G   K
       / \       \
      A   C       I
                 /
                H

### **Breadth-first** (Level-order)

![Breadth-First Binary Tree Traversal](./img/algo-breadth-first-traversal.png)

- Visit all nodes at the current level
- Queue: A, D, J, B, E, G, K, A, C, I, H

Time complexity: `O(n)`
Space complexity:

- Best: `O(1)`
- Worst: `O(n)`
- Avg: `O(n)`

Algorithm pseudo-code:

```js
// data structure
node = {
  data
  leftChild
  rightChild
}

function levelOrder(rootNode) {
  if (rootNode === null) return;
    queueArr.push(rootNode);
    while (queue is not empty) {
      currentNode = queueArr[queueArr.length-1];
      console.log(currentNode);
      if (currentNode.leftChild !== null) queueArr.push(currentNode.leftChild);
      if (currentNode.rightChild !== null) queueArr.push(currentNode.rightChild);
      queueArr.pop(); // remove last element
    }

}

```

### **Depth-first** (One Side)

![Depth First Binary Tree Traversal](./img/algo-depth-first-traversal.png)

- Visit all children of a given path
- Stack: A, D, B, A, C, E, J, G, I, H, K
- Preorder:
  - Root, Left, Right
  - Data, L, R
- Inorder
  - Left, Root, Right
  - L, Data, R
- Postorder:
  - Left, Right, Root
  - L, R, Data

Time Complexity: `O(n)`
Space Complexity: `O(h)` height of tree

- Worst: `O(n)`
- Best: `O(log n)`
- Avg: `O(log n)`

```js
Node = {
  data,
  leftNode,
  rightNode,
};

// preorder: D, L, R
function preorder(rootNode) {
  if (rootNode === null) return;

  console.log(rootNode.data);
  preorder(rootNode.leftNode);
  preorder(rootNode.rightNode);
}

// inorder: L, D, R
function inorder(rootNode) {
  if (rootNode === null) return;

  inorder(rootNode.left);
  console.log(rootNode.data);
  inorder(rootNode.rightNode);
}

// postorder: L, R, D
function postorder(rootNode) {
  if (rootNode === null) return;

  postorder(rootNode.leftNode);
  postorder(rootNode.rightNode);
  console.log(rootNode.data);
}
```

### Is Binary Tree a Binary SEARCH Tree

A binary search tree requires that all left nodes are less than the root node and all right nodes are greater than the root node.

Algorithm:

```js
node = {
  data,
  nodeLeft,
  nodeRight,
};

function isBinarySearchTree(rootNode) {
  // base case
  if (rootNode === null) return;

  if (
    isSubtreeLesser(rootNode.leftNode, rootNode.data) &&
    isSubtreeGreater(rootNode.rightNode, rootNode.data) &&
    isBinarySearchTree(rootNode.leftNode) &&
    isBinarySearchtree(rootNode.rightNode)
  )
    return true;
  return false;
}

function isSubtreeLesser(rootNode, value) {
  // base case
  if (root === NULL) return true;

  if (
    rootNode.data <= value &&
    isSubtreeLesser(rootNode.leftNode, value) &&
    isSubtreeLesser(rootNode.rightNode, value)
  )
    return true;
  return false;
}

function isSubtreeGreater(rootNode, value) {
  // base case
  if (root === NULL) return true;

  if (
    rootNode.data > value &&
    isSubtreeGreater(rootNode.leftNode, value) &&
    isSubtreeGreater(rootNode.rightNode, value)
  ) {
    return true;
  }
  return false;
}
```

## Stacks

**Stack**: Can only add/remove from top of stack

- Elements are sorted by **insertion order**
- Last element in is first out (**LIFO**)
- Elements have no index
- Can only add/remove from the top

_Stack of books_

- Add book to the top of the pile
- Remove book from the top of the pile

Real life examples:

- Undo button
- Back/Forward in web browser

![Stacks Summary](./img/algo-stacks.png)

Stacks have two functions:

- `Push`: Add to top of stack
  - Look for pointer
  - Push item there
  - Move pointer up +1
- `Pop`: Remove top most item
  - Move pointer down -1
  - Remove element

Error Conditions:

- Pushing to a full stack
  - If pointer is at `n` (array size) or greater
  - Disable push
- Popping from an empty stack
  - If pointer points to element 0 (stack is empty)
  - Disable pop

Stacks require:

- Array
- Variable pointing to top of stack

## Queues

Queues are good for managing resources, such as a print queue or web site access.

- The person who's been waiting the longest goes first

**Queues**: Front & back

- Elements are sorted by **insertion order**
- First element in is first out (**FIFO**)
- Elements have no index
- Can only add to back (enqueue) & remove from the front (dequeue)

![Queues Summary](./img/algo-queues.png)

Queues have two functions:

- **Enqueue**: Add to back (_offer_)
- **Dequeue**: Remove from front (_poll_)

Queues are good for managing resources, such as a print queue or web site access.

- The person who's been waiting the longest goes first

Basic Logic:

- 2 Pointers: Front & Back
  - Back pointer: points to next empty slot
  - Front pointer: points to a number
- Dequeue:
  - Remove item @ front pointer location
  - Move front pointer +1
- Enqueue
  - Add item to back pointer location
  - Move pointer +1
- Loop to beginning of array if end of array it reached
  - Use Modulo: for array of size 5
  - Position 4, use `(pointer + 1) % 5` => `5 % 5` becomes [0]

Error Conditions:

- Enqueue to a full queue
  - To see if a queue is full, check if the back pointer is directly to the left of the front pointer
  - Full: back=3, front=4
- Dequeueing from an empty queue
  - To see if a queue is empty, check if front pointer & back pointer are the same value
  - Empty: back=0, front=0
