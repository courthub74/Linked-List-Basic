//Linked List

//Node
class Node {
  constructor(value, next) {
    // The value of the node.  Can  be anything.
    this.value = value;
    // the pointer to the next node in the chain.
    this.next = next || null;
  }
}

//LinkedList
class LinkedList {
  //create a new linked list
  constructor() {
    //size of the linked list
    this.size = 0;
    //pointer to the head(first node)
    this.head = null;
    //pointer to the tail(last node)
    this.tail = null;
  }
  //Add to the front of the linked list
  prepend(value) {
    //increment size
    this.size += 1;

    //Create a new node in memory
    // Make it's  'next' point to the memory address currently in this.head
    // currently at this.head
    const node = new Node(value, this.head);
    // set this.head to the address of the new node
    this.head = node;
    // If there is no tail (if this is the first entry)
    // set this.tail to point to the memory address for node.
    if (!this.tail) this.tail = node;
    //return this so we can chain multiple
    return this;
  }
  //Add to the end of the linked list
  append(value) {
    //increment size
    this.size += 1;

    //Create a new node in memory
    //make its 'next' point to the memory address currently in this.tail
    const node = new Node(value, this.tail);
    //set this.tail to the address of the new node
    this.tail = node;
    //if there is no head (and this happens to be the only node)
    //set this.head to point to this tail(or memory address for node)
    if (!this.head) this.tail = node;
    //return this so we can chain multiple
  }

  print() {
    console.log('HEAD:', this.head);
    console.log('TAIL:', this.tail);
    console.log('SIZE:', this.size);
    console.log(JSON.stringify(this, null, 2));
  }
}

// instantiate the new class
const list = new LinkedList();

// write some tests!!
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.append(10);
list.append(12);
list.append(14);

console.log(list);
