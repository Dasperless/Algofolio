class Node{
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Tree{
	constructor(){
		this.root = null;
	}

	insert(value){
		this.root = this.insertNode(this.root, value);
	}

	insertNode(node, value){
		if(node === null){
			node = new Node(value);
		}
		else if(value < node.value){
			node.left = this.insertNode(node.left, value);
		}
		else if(value > node.value){
			node.right = this.insertNode(node.right, value);
		}
		return node;
	}

}