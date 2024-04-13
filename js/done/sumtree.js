function sumTree(tree, tonull)  { 
    if (tree.value) {
      values += tree.value
    }
    if (tree.left) {
      sumTree(tree.left)
    }
    if (tree.right) {
      sumTree(tree.right)
    }
    if (tonull) {
      values = 0;
    }
    return values;
  }
  
  function callbackSumTree(tree) {
    sumTree(tree, true)
  }
  