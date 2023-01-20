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
let currentValue = null;
let tree = new Tree();

function getInputValue(){
	currentValue = document.getElementById("input").value;
	currentValue = parseInt(currentValue);
}

function insertValue(){
	getInputValue();
	tree.insert(currentValue);
	document.getElementById("input").value = "";
	showNode();
}

// Muestra el nodo en el canvas
function showNode(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.arc(100, 100, 50, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.font = "30px Arial";
	ctx.fillText(currentValue, 85, 110);
}

var value = currentValue;