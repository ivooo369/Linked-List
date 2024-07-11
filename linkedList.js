class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    let current = this.headNode;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    if (!this.headNode) return null;
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let current = this.headNode;
    let count = 0;
    while (current) {
      if (count === index) return current;
      count++;
      current = current.nextNode;
    }
    return null;
  }

  pop() {
    if (!this.headNode) return null;
    if (!this.headNode.nextNode) {
      this.headNode = null;
      return;
    }
    let current = this.headNode;
    while (current.nextNode && current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.headNode;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      index++;
      current = current.nextNode;
    }
    return null;
  }

  toString() {
    let result = "";
    let current = this.headNode;
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + "null";
  }

  insertAt(value, index) {
    if (index < 0) return;
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const newNode = new Node(value);
    let current = this.headNode;
    let previous = null;
    let count = 0;
    while (current && count < index) {
      previous = current;
      current = current.nextNode;
      count++;
    }
    if (previous) {
      previous.nextNode = newNode;
      newNode.nextNode = current;
    }
  }

  removeAt(index) {
    if (index < 0 || !this.headNode) return null;
    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }
    let current = this.headNode;
    let previous = null;
    let count = 0;
    while (current && count < index) {
      previous = current;
      current = current.nextNode;
      count++;
    }
    if (previous && current) {
      previous.nextNode = current.nextNode;
    }
  }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);
linkedList.insertAt(15, 2);
console.log(linkedList.toString());
console.log(linkedList.size());
console.log(linkedList.head().value);
console.log(linkedList.tail().value);
console.log(linkedList.at(2).value);
linkedList.pop();
console.log(linkedList.toString());
console.log(linkedList.contains(10));
console.log(linkedList.contains(20));
console.log(linkedList.find(10));
linkedList.removeAt(1);
console.log(linkedList.toString());
