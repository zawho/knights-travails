import Node from './tree-node';
import sortAndReduce from './merge-sort';

function findNextBiggest(deletedNode) {
    let currentNode = deletedNode.right;

    while (currentNode.left !== null) {
        currentNode = currentNode.left;
    }
    return currentNode.node;
}

class Tree {

    constructor(arr) {
        this.root = this.buildTree(arr, 0, arr.length - 1);
    }

    buildTree(arr, start, end) {
        if (start > end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2);
        const treeNode = new Node(arr[mid]);

        treeNode.left = this.buildTree(arr, start, mid - 1);
        treeNode.right = this.buildTree(arr, mid + 1, end);
        return treeNode;
    }

    insert(value, root = this.root) {
        let rootVar = root;

        if (rootVar === null) {
            rootVar = new Node(value);
            return rootVar;
        }

        if (value < rootVar.node) {
            rootVar.left = this.insert(value, rootVar.left);
        } else if (value > rootVar.node) {
            rootVar.right = this.insert(value, rootVar.right);
        }

        return rootVar;
    }

    find(value, rootVar = this.root) {
        if (rootVar.node === value) {
            return rootVar;
        } 

        if (rootVar.node !== value && rootVar.left === null && rootVar.right === null ||
            value < rootVar.node && rootVar.left === null || 
        value > rootVar.node && rootVar.right === null ) {
            console.log(`This tree does not contain ${value}.`);
            return null;
        }

        if (typeof value !== 'number') {
            console.log(`Please enter a number.`);
            return null;
        }

        if (value < rootVar.node) {
            return this.find(value, rootVar.left);
        } 
        return this.find(value, rootVar.right);
    }

    delete(value, root = this.root) {
        const rootVar = root;

        if (rootVar === null) {
            return rootVar;
        }

        if (value < rootVar.node) {
            rootVar.left = this.delete(value, rootVar.left);
        } else if (value > rootVar.node) {
            rootVar.right = this.delete(value, rootVar.right);
        } else if (rootVar.left === null) {
            return rootVar.right;
        } else if (rootVar.right === null) {
            return rootVar.left;
        } else {
            rootVar.node = findNextBiggest(rootVar);
            rootVar.right = this.delete(rootVar.node, rootVar.right);
        }
    
        return rootVar;
    }

    levelOrder() {
        if (this.root === null) {
            return null;
        }

        const queue = [];
        const arr = [];
        
        queue.push(this.root);

        while (queue.length > 0) {
            const current = queue.shift();
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
            arr.push(current.node);
        }

        return arr;
    }

    preOrder(rootVar = this.root, arr = []) {
        if (rootVar === null) {
            return null;
        }
        
        arr.push(rootVar.node);

        this.preOrder(rootVar.left, arr);
        this.preOrder(rootVar.right, arr);

        return arr;
    }

    inOrder(rootVar = this.root, arr = []) {
        if (rootVar === null) {
            return null;
        }
        
        this.inOrder(rootVar.left, arr);

        arr.push(rootVar.node);

        this.inOrder(rootVar.right, arr);

        return arr;
    }

    postOrder(rootVar = this.root, arr = []) {
        if (rootVar === null) {
            return null;
        }

        this.postOrder(rootVar.left, arr);
        this.postOrder(rootVar.right, arr);

        arr.push(rootVar.node);

        return arr;
    }

    height(nodeVar, rootVar = this.find(nodeVar)) {
        if (rootVar === null) {
            return 0;
        }

        const leafHeight = Math.max(this.height(nodeVar, rootVar.left), 
        this.height(nodeVar, rootVar.right)) + 0;
        const nodeHeight = Math.max(this.height(nodeVar, rootVar.left), 
        this.height(nodeVar, rootVar.right)) + 1;

        if (rootVar.left === null && rootVar.right === null) {
            return leafHeight;
        }

        return nodeHeight;
    }

    depth(nodeVar, rootVar = this.root) {
        if (this.find(nodeVar) === null) {
            return 0;
        }

        if (rootVar.node === nodeVar) {
            return 0;
        }

        if (nodeVar < rootVar.node) {
            return this.depth(nodeVar, rootVar.left) + 1;
        } 
        return this.depth(nodeVar, rootVar.right) + 1;
    }

    isBalanced(rootVar = this.root) {
        if (rootVar === null) {
            return true;
        }

        const leftHeight = this.height(rootVar.node, rootVar.left);
        const rightHeight = this.height(rootVar.node, rootVar.right);
        const heightDiff = leftHeight - rightHeight;

        if (heightDiff < 2 && heightDiff > -2) {
            this.isBalanced(rootVar.left);
            this.isBalanced(rootVar.right);
            return true;
        }
        return false;
    }

    rebalance() {
        const newArr = this.levelOrder();
        const newSortedArr = sortAndReduce(newArr);
        const newTree = new Tree(newSortedArr);
        this.root = newTree.root;
    }
}

export default Tree;