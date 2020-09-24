// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor (value) {
        this.value = value
        this.next = null;
        this.prev = null;
    }
}

class Stack {

    constructor () {
        this.top = null;
        this.length = 0;
    }

    push (value) {
        const newNode = new Node(value);


        if (this.length === 0) {
            this.top = newNode;
            this.length ++;
            return this.length;
        } else {
            const oldTop = this.top;
            oldTop.prev = this.top.next;
            this.top = newNode;
            this.top.next = oldTop
            oldTop.next = this.top;
            this.length++;
            return this.length;
        }
    }

    pop () {
        if (this.length === 0) {
            return null
        } else if (this.length === 1) {
            let oldTop = this.top;
            this.top = null;
            this.length --;
            return oldTop.value;
        } else {
            let oldTop = this.top;
            this.top = oldTop.next;
            this.length--;
            this.top.next = this.top.prev
            return oldTop.value;
        }
    }

    size () {
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
