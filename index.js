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
  const lis = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString();
  }
  //const ranks = document.querySelectorAll('.ranked-list li');
  //console.log(ranks[0]);
  //ranks[0].innerHtml = 'test';
  //ranks.innerHtml = 'test';
  //for(let i = 0; i < ranks.length; i++) {
  //  (parseInt(ranks[i].innerHtml) + n).toString();
  //}
}
