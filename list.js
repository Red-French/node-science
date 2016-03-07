'use strict';

class Node {
  constructor (data) {
    this.payload = data
    this.next = null
  }
}

// const h = new Node('hello')
// const w = new Node('world')
//
// console.log(h);
// console.log(w);

class List {
  constructor () {
    this.head = null
  }

  add (node) {  // create 'add' method
    node.next = this.head
    this.head = node
  }
}

const list = new List
console.log(list);
list.add(new Node('A'))
console.log(list);
list.add(new Node('B'))
console.log(list);
list.add(new Node('C'))
console.log(list);
list.add(new Node('D'))
console.log(list);
list.add(new Node('E'))
console.log(list);

// function Node(data) {
//   this.payload = data;
// }
