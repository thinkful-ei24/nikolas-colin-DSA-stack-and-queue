
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class StarTrek {
  constructor() {
    this.top = null;
  }

  push(value) {
    if(this.top === null) {
      this.top = new _Node(value, this.top);
      return this.top;
    }
    //create a new node
    //new is going to point to current top
    //set top to new
    this.top = new _Node(value, this.top);
    return this;
  }

  pop(value) {
    if (this.top === null) {
      return;
    }
    //capture top in variable
    //set top to point to null
    //return value of old top
    let node = this.top;
    this.top = this.top.next;
    return node.value;
  }
}

////////////////////////  PRINT THAT SHIT ///////////////////
function printStack(stack) {
  while (stack.top !== null) {
    console.log(stack.top.value);
    stack.top = stack.top.next;
  }
}

////////////////////// TAKE QUICK PEEK ////////////////////
function peek(stack) {
  if (stack.top === null) {
    return 'there ain\'t no top for the wicked';
  }
  return stack.top.value;
}


function main() {
  const stack = new StarTrek();
  stack.push('kirk');
  stack.push('Spock');
  stack.push('McCoy');
  stack.push('Scotty');
  stack.pop('Scotty');

  console.log(peek(stack));
}

main();
