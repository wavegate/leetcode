class Node {
  constructor(val, left, right) {
    this.val = val ? val : null;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root ? root : null;
  }

  *iterativePreOrder() {
    const stack = [this.root];
    while (stack.length > 0) {
      const current = stack.pop();
      yield current;
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
  }

  *iterativeInOrder() {
    const stack = [];
    let current = this.root;
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      if (stack.length > 0) {
        const node = stack.pop();
        yield node;
        current = node.right;
      }
    }
  }

  *iterativePostOrder() {
    const stack = [];
    let current = this.root;
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      if (stack.length > 0) {
        const node = stack.pop();
        yield node;
        current = node.right;
      }
    }
  }

  *recursiveDFS(current = this.root) {
    yield current;
    if (current.right) yield* this.recursiveDFS(current.right);
    if (current.left) yield* this.recursiveDFS(current.left);
  }

  print() {
    for (let node of this.iterativePostOrder()) {
      console.log(node.val);
    }
  }
}

const root = new Node(
  3,
  new Node(4, new Node(1), new Node(2)),
  new Node(5, new Node(4), new Node(6))
);
const tree = new BinaryTree(root);
tree.print();
