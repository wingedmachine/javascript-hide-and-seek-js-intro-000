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
  //const lis = document.querySelectorAll('.ranked-list li');
  //for (let i = 0; i < lis.length; i++) {
  //  lis[i].innerHTML = (i + 2).toString();
  //}

  const ranks = document.querySelectorAll('.ranked-list li');
  for(let i = 0; i < ranks.length; i++) {
    (parseInt(ranks[i].innerHTML) + n).toString();
  }
}
