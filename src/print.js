function printTree(root, prefix = "", isLeft = true) {

    if (root === null) {
        return;
      }

      if (root.right !== null) {
        printTree(root.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
      }

      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${root.node}`);
      
      if (root.left !== null) {
        printTree(root.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
      }
   
}

export default printTree;