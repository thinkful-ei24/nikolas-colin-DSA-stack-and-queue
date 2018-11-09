
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

///////////////////// ITS A PALINDROME /////////////////////
function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  //create a new stack
  //creat ANOTHER stack
  //iterate through string, and push onto stack
  //iterate through reverseString and push to stack2
  //while top1 === top2
  //  top1 = top1.next
  //  top2 = top2.next
  //if Top1 !== top2 return false
  //return true
  const stackOne = new StarTrek();
  const stackTwo = new StarTrek();
  for (let c in s) {
    stackOne.push(s[c]);
  }
  const reversed = reverseString(s);
  for (let c in reversed) {
    stackTwo.push(reversed[c]);
  }
  while ( stackOne.top !== null && stackOne.top.value === stackTwo.top.value ) {
    stackOne.top = stackOne.top.next;
    stackTwo.top = stackTwo.top.next;
  }
  if (stackOne.top !== stackTwo.top) {
    return false;
  }
  return true;
}

//console.log(isPalindrome('starrats'), 'TRUE');
//console.log(isPalindrome('abcdefg'), 'FALSE');

function reverseString(string) {
  if (!string.length) {
    return '';
  }
  return reverseString(string.slice(1)) + string[0];
}

//console.log(reverseString('dog'));

/////////////////////////////// MATCHING PARENTHESIS ///////////////////////////
function matchingParens(string) {
  //create a stack push if "(" // pop if ")"
  const stack = new StarTrek();
  for (let c in string) {
    if ( string[c] === "(" ) {
      stack.push(c);
    } else if (string[c] === ")" && stack.top !== null) {
      stack.pop();
    } else {
      return `parenthesis error at ${c}`;
    }
  }
  return true;

  //error handling
  //  if it starts with a closing parens = error
  //  string ends with "(" = error
}

console.log(matchingParens('((((((()))))))'), 'should be TRUE');
console.log(matchingParens(')(((((()))))))'), 'should be error at 0');
console.log(matchingParens('((((((()))))))))'), 'should be sucks 14ish');
console.log(matchingParens('())'), 'should be sucks at 2');
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

