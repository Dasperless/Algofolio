// const {Node, LinkedList} = require('./LinkedList')
import {Node, LinkedList} from './LinkedList.js';

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