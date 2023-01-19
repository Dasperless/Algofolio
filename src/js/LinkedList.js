class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = new Node(0);
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

export default LinkedList;