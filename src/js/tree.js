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
	insertNodeCanvas();
}

// Muestra el nodo en el canvas
function insertNodeCanvas(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.strokeStyle = "white";
	ctx.fillStyle = "white";
	ctx.scale(1,1);
	var ancho = canvas.width;
	var x = ancho/2;
	var y = 15;
	var radio = 10;
	
	// Dibuja el nodo
	
	ctx.beginPath();
	ctx.arc(x, y, radio, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.font = "0.8em Arial";

	// Muestra el valor del nodo
	var textWidth = ctx.measureText(currentValue).width;
	ctx.fillText(currentValue, x-(textWidth/2), y+(textWidth/2));
}

var value = currentValue;