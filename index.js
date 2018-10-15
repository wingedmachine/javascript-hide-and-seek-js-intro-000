function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let currentNode = document.querySelector('#grand-node');
  while(currentNode.querySelectorAll('children')) {
    currentNode = currentNode.querySelectorAll('children')[0];
  }
  return currentNode;
}