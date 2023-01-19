export class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

export class LinkedList{
    constructor(value){
        this.head = new Node(value);
    }

    insertNode(value){
        this.head = new Node(value);
        console.log(`Node ${value} was added succesfully`);
    }

    append(value){
        var new_node = new Node(value)
        if (this.head === null){
            this.insertNode(value);
        }
    
        new_node.next = null;
        var aux = this.head;

        while(aux.next != null){
            aux = aux.next;
        }

        aux.next = new_node;
    }
}

// module.exports = {Node, LinkedList}
let list = new LinkedList();
list.insertNode(4);
list.append(5);
list.append(25);
list.append(45);
list.append(35);

let aux = list.head;
// console.log(aux);
while(aux.next != null){
    console.log(aux);
    aux = aux.next;
}
