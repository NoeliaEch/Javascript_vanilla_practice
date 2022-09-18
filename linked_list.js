
class LinkedList {
    constructor (head=null){
        this.head = head;
    }

    // return size of linked list
    size() {
        let count = 0;
        let node = this.head;

        while (node) {
            count++;
            node = node.next;
        }

        return count;
    }

    // clear the linked list
    empty () {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while(lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode.data;
    }

    getFirst() {
        return this.head.data;
    }

    getAllElements(){
        let node = this.head;
        let array = [];
        while (node) {
            array.push(node.data);
            node  = node.next;
        }
        return array;
    }

    addNode(node) {
        // add in the head
        let node_old = this.head;
        node.next = node_old;
        this.head = node;
    }
}

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedOrderedList extends LinkedList {
    constructor(head){
        super(head);
    }

    // @override
    addNode(node) {
        let act = this.head;

        if (act==null) {
            this.head = node;
        }
        else if (act!=null && node.data>act.data) {
            node.next = act;
            this.head = node;
        }
        else {
            let ant;
            ant = act;
            act = act.next;
                    
            while(act!=null && act.data>node.data) {
                ant = act;
                act = act.next;
            }            
            node.next = act;
            ant.next = node;           
        }

    }

}

// Unordered linked list
// Node for lista
let node1 = new ListNode(5);
let lista = new LinkedList(node1);

// add some other node
lista.addNode(new ListNode(15));
lista.addNode(new ListNode(108));
lista.addNode(new ListNode(66));
lista.addNode(new ListNode(8));
lista.addNode(new ListNode(1356));

// Show 
console.log("---- Unordered List ----")
console.log("List size = ", lista.size());
console.log("First Element = ", lista.getFirst());
console.log("Last element = ", lista.getLast());
console.log("----------------------------------------------");
console.log("Show all elements = \n",lista.getAllElements());

// ********************************************************

// Ordered Linked list
let node2 = new ListNode(5);
let lista_ord = new LinkedOrderedList(node2);

// add some other node
lista_ord.addNode(new ListNode(15));
lista_ord.addNode(new ListNode(108));
lista_ord.addNode(new ListNode(66));
lista_ord.addNode(new ListNode(8));
lista_ord.addNode(new ListNode(1356));

// Show 
console.log("\n###############################################");
console.log("---- Ordered List ----");
console.log("List size = ", lista_ord.size());
console.log("First Element = ", lista_ord.getFirst());
console.log("Last element = ", lista_ord.getLast());
console.log("----------------------------------------------");
console.log("Show all elements = \n",lista_ord.getAllElements());
console.log("###############################################");