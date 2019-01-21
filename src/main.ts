class NodeElement {
  leftNode: NodeElement;
  rightNode: NodeElement;
  value: number;
  constructor(Value: number) {
    this.leftNode = null;
    this.rightNode = null;
    this.value = Value;
  }
}
class binaryTree {
  rootNode: NodeElement;
  constructor(){
    this.rootNode = null;
  }
  addNode(Value: number): void {
    if (this.rootNode == null) {
      this.rootNode = new NodeElement(Value);
      return;
    }
    this.addNodeRecursion(this.rootNode, Value);
  }
  addNodeRecursion(currentNode: NodeElement, newValue: number): void{
    if (currentNode.value < newValue) {
      if (currentNode.rightNode == null) {
        currentNode.rightNode = new NodeElement(newValue);
        return;
      } else {
        this.addNodeRecursion(currentNode.rightNode, newValue);
      }
    } else {
      if (currentNode.leftNode == null) {
        currentNode.leftNode = new NodeElement(newValue);
        return;
      } else {
        this.addNodeRecursion(currentNode.leftNode, newValue);
      }
    }
  }
  printTree(): void {
    if (this.rootNode ==  null) {
      console.log("Tree is not created yet");
    } else {
      console.log("Root: " + this.rootNode.value)
      this.printTreeT(this.rootNode, 1);
    }
  }
  printTreeT(currentNode: NodeElement, level: number) {
    if (currentNode.leftNode != null) {
      console.log("LB"+ '---'.repeat(level) + ">" + currentNode.leftNode.value );
      this.printTreeT(currentNode.leftNode, level + 1);
    }
    if (currentNode.rightNode != null) {
      console.log("RB"+ '---'.repeat(level) + ">" + currentNode.rightNode.value);
      this.printTreeT(currentNode.rightNode, level + 1);
    }
  }
  searchNode(value: number): NodeElement {
    let flag: boolean = false;
    if (this.rootNode.value == value) {
      return this.rootNode;
    } else {
        return this.searchNodeT(this.rootNode, value);
    }
  }
  searchNodeT(currentNode: NodeElement, value: number): NodeElement {
    if (currentNode.value == value) {
      return currentNode;
    }
    if(value < currentNode.value) {
      if (currentNode.leftNode != null) {
        return this.searchNodeT(currentNode.leftNode, value);
      } else return null;
    } else {
      if (currentNode.rightNode != null) {
        return this.searchNodeT(currentNode.rightNode, value);
      } else return null;
    }
  }
  removeNode(value: number): void {
     if (this.rootNode.value == value) {
       this.rootNode = null;
     }
     let currentNode: NodeElement = this.rootNode;
     let parentNode: NodeElement  = null;
     while (currentNode.value != value) {
       if (currentNode.value > value) {
         parentNode = currentNode;
         currentNode = currentNode.leftNode;
       } else {
         parentNode = currentNode;
         currentNode = currentNode.rightNode;
       }
     }
     if (currentNode.leftNode == null && currentNode.rightNode == null) {
       if (parentNode.leftNode == currentNode ) {
         parentNode.leftNode = null;
       } else parentNode.rightNode = null;
     } else if (currentNode.leftNode == null || currentNode.rightNode == null) {
       if (currentNode.leftNode == null) {
         if (parentNode.leftNode == currentNode ) {
           parentNode.leftNode = currentNode.rightNode;
         } else parentNode.rightNode = currentNode.rightNode;
       } else {
         if (parentNode.leftNode == currentNode ) {
           parentNode.leftNode = currentNode.leftNode;
         } else parentNode.rightNode = currentNode.leftNode;
       }
     }
     if(currentNode.leftNode != null && currentNode.rightNode != null) {

     }
  }
}

let nodeList: number[] = [8, 4, 3, 2, 1, 7, 5, 9];
console.log("Initial Array:  " + nodeList);
console.log("LB - Left Branch, RB - Right Branch");
console.log("");
let FirstTree: binaryTree = new binaryTree();
for(let i = 0; i < nodeList.length; i++) {
   FirstTree.addNode(nodeList[i]);
}
FirstTree.printTree();
FirstTree.addNode(6);
console.log("");
console.log("%cMETHOD: addNode(6)","color:green;font-weight:bold;");
FirstTree.printTree();
console.log("");
console.log("%cMETHOD: searchNode(4)","color:green;font-weight:bold;");
console.log(FirstTree.searchNode(4));
console.log("%cMETHOD: searchNode(11)","color:green;font-weight:bold;");
console.log(FirstTree.searchNode(11));
console.log("");
console.log("%cMETHOD: removeNode(3)","color:green;font-weight:bold;");
FirstTree.removeNode(3);
FirstTree.printTree();
