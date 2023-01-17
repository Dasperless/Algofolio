class Node {
    constructor(value){
        this.vale = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertNode(value){
        this.head = new Node(value);
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