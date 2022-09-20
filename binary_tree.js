/**
 * Implementation of Binary Search Tree
 * Implemented methods:
 *          getRootNode()   --> return root of tree
 *          addNode(data)   --> add node to the tree
 *          insertNode(node, newNode) --> auxiliar method used in addNode
 *          inOrder(node)   --> show tree in order
 *          preOrder(node)   --> show tree pre order
 *          postOrder(node)   --> show tree post order
 *          deleteData(data)  --> delete data if exists
 *          removeNode(node, data) --> auxiliar method used in deleteData
 *          findMinRightSubtree(node) --> auxiliar method used in removeNode
 *          search(node, data) --> search if data exists in tree (return true or false)
 */         


// first we define Node class
class Node {
    constructor(data)  {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// class for binary tree
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    getRootNode(){
        return this.root;
    }

    // add data method
    addNode(data) {
        
        // new node with data
        var newNode = new Node(data);

        // chek if it is the first element
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            // call auxiliar method 
            // find the correct position in the tree
            this.insertNode(this.root, newNode);
        }
    }

    // Auxiliar method used in addNode. Find the correct position of a newNode recursively
    insertNode(node, newNode) {

        // if data is less than actual node, move left.
        if (newNode.data < node.data) {

            // if left node is null, insert here
            if (node.left === null)
                node.left = newNode;
            else {
                // if left node is not null, we must continue searching
                // repeat recursively until null is found
                this.insertNode(node.left, newNode);
            }
        } else {
            // if right node is null, insert here
            if (node.right === null) 
                node.right = newNode;
            else {
                // if right node is not null, we must continue searching
                // repeat recursively until null is found
                this.insertNode(node.right, newNode);
            }
        }
    }


    // In order 
    inOrder(node) {
        
        if (node!== null) {
            // left child
            this.inOrder(node.left);
            // show root
            console.log(node.data);
            // right child
            this.inOrder(node.right);
        }
    }

    // Pre order
    preOrder(node) {
        
        if (node!==null) {
            // show root
            console.log(node.data);
            // left child
            this.preOrder(node.left);
            // right child
            this.preOrder(node.right);
        }
    }

    // PostOrder
    postOrder(node) {
        
        if (node!==null){
            //left child
            this.postOrder(node.left);
            //right child
            this.postOrder(node.right);
            // show root
            console.log(node.data);
        }
    }

    deleteData(data) {
        this.root = this.removeNode(this.root, data);
    }


    removeNode(node, data) {

        // check for empty tree
        if (node===null){
            return null;
        }
        else if (data < node.data) { // move left looking for data
            node.left = this.removeNode(node.left, data);
            return node;
        }
        else if (data > node.data) { // move right
            node.right = this.removeNode(node.right, data);
            return node;
        }
        else  {
            // we found data...but
            // if doesnt have any child, just remove
            if (node.left===null && node.right===null){
                node = null;
                return node;
            }
            
            // if only has a child, promote child to replace his father
            if (node.left===null) {
                node = node.right;
                return node;
            } // same but with only left child
            else if (node.right===null) {
                node = node.left;
                return node;
            }
            else {
                // if node has two  children...
                // we need the minimum node of right subtree to replace the father
                let auxiliar = this.findMinRightSubtree(node.right);
                node.data = auxiliar.data;

                node.right = this.removeNode(node.right, aux.data);
                return node;
            }

        }

    }
    // aux method for removeNode
    findMinRightSubtree(node) {
        if (node.left===null) {
            return node;
        } else {
            return this.findMinRightSubtree(node.left);
        }

    }

    // search data
    search(node, data) { // return true or false
        if (node===null) {
            return false; // data not found
        }
        else if (data<node.data) {
            return this.search(node.left, data);
        }
        else if (data>node.data) {
            return this.search(node.right, data);
        }
        else {
            return true;
        }
    }

}


// Testing our binary tree class

// data to insert
let nds = [15,  18, 3, 6, 9, 21, 10, 29, 16, 20];

// new binary tree
let bst = new BinarySearchTree();

// add some data
nds.forEach(item => {
    bst.addNode(item);
})

// get root node
let root = bst.getRootNode();

// show in order
console.log("---------------------------------------------");
console.log("In order");
bst.inOrder(root);
console.log("---------------------------------------------");
console.log("Pre order");
bst.preOrder(root);
console.log("---------------------------------------------");
console.log("Post order");
bst.postOrder(root);
console.log("---------------------------------------------");

// remove some data, and show (in order) resultant tree
bst.deleteData(16) ;
console.log("\n---------------------------------------------");
console.log("In order post remove");
bst.inOrder(root);
console.log("---------------------------------------------");

console.log("\n---------------------------------------------");
console.log("search data");
let data = 108;

bst.search(root, data)?console.log(`${data} exists in bts`):console.log(`${data} not found in bts`);