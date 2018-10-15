function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let currentNode = document.querySelector('#grand-node');
  while(currentNode.children.length !== 0) {
    currentNode = currentNode.children[0];
  }
  return currentNode;
}

function increaseRankBy(n) {
  let ranks = document.querySelector('.ranked-list');
  console.log(ranks.innerHtml);
  //ranks.innerHtml = 'test';
  //for(let i = 0; i < ranks.length; i++) {
  //  (parseInt(ranks[i].innerHtml) + n).toString();
  //}
}
