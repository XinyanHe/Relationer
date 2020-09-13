/* JS Library */
"use strict";

// const e = require("express");

(function(global){

class Network {
	constructor() {
		this.nodesArray = [];
		this.edgesArray = [];
	}

	createNode = (id,color,x,y,r,shape) => {
		const node = new Node(id,color,x,y,r,shape);
		this.addNode(node);
		return node;
	}

	createEdge = (id,from,to) => {
		const edge = new Edge(id,from,to);
		this.addEdge(edge);
		return edge
	}

	addNode = (node) => {
		if(this.nodesArray.indexOf(node) === -1){
			this.nodesArray.push(node);
		}
	}

	deleteNode = (node) => {
		var index = this.nodesArray.indexOf(node);
		if (index != -1) {
			this.nodesArray.splice(index, 1);
		}
	}

	addEdge = (edge) => {
		if(this.edgesArray.indexOf(edge) === -1){
			this.edgesArray.push(edge);
		}
	}

	deleteEdge = (edge) => {
		var index = this.edgesArray.indexOf(edge);
		if (index != -1) {
			this.edgesArray.splice(index, 1);
		}
	}

	setEdgeArray = () =>{
		//initialize all the edges
		this.edgesArray.forEach((edge)=>{
			edge.lightdownEdge();
		})

		this.edgesArray.forEach((edge)=> {
			this.nodesArray.forEach((node) => {
				if(edge.from.id === node.id || edge.to.id === node.id){
					if(node.labelvisible){
						edge.lightupEdge();
					}
				}
			})
		})
	}

	draw = (canvas) => {
		canvas.clear();
		this.setEdgeArray();

		this.edgesArray.forEach((node) => {
			node.drawEdge(canvas.context,1);
		})

		this.nodesArray.forEach((node) => {
			node.drawNode(canvas.context);
		})
	}

	getNodebyId = (id) => {
		var target;
		this.nodesArray.forEach((node) => {
			if(node.id === id){
				target = node;
			}
		})
		return target;
	}

	getRandomColor = () => {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
		  color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	  }

	//Generate a random graph
	randomGenerator = () => {

		//Generate the random number of nodes
		const nodeNum = Math.floor((Math.random() * 50) + 1);
		for(let i = 1; i <= nodeNum; i++){
			var x = Math.floor((Math.random() * 550) + 70);
			var y = Math.floor((Math.random() * 600) + 20);
			var size = Math.floor((Math.random() * 15) + 8);
			var color = this.getRandomColor();
			var node = this.createNode(i,color,x,y,size,'circle');
		}
		//Generate the random number of nodes
		if(nodeNum > 0){
			const edgeNum = Math.floor(Math.random() * (nodeNum * (nodeNum - 1)/2) + 1);
			for(let j = 1; j <= edgeNum; j++){
				var from = Math.floor((Math.random() * nodeNum) + 1);
				var to = Math.floor((Math.random() * nodeNum) + 1);

				var fromNode = this.getNodebyId(from);
				var toNode = this.getNodebyId(to)

				var edge = this.createEdge(j,fromNode,toNode)
			}
		}
	}

}

class Canvas {

	constructor(network) {
		this.mouse = {x:0,y:0};
		this.position = {x:0,y:0};
		this.network = network;

		var div = document.createElement("div");
		div.style.display = 'inline-block';

		this.canvas = document.createElement("canvas");
		this.context = this.canvas.getContext('2d');
		div.append(this.canvas);

		this.div = div;
		this.div.setAttribute("margin-left", "50px");

		this.canvas.setAttribute('width', 650);
		this.canvas.setAttribute('height', 650);
		this.canvas.setAttribute('margin','auto');
		this.canvas.addEventListener("dblclick", this.dbclick, false);

		this.canvas.onmousedown = this.mouseDown;
		this.canvas.onmouseup = this.mouseUp;
		this.canvas.onmousemove = this.mouseMove;

		// Elements relates to drag
		this.dragFlag = false;

		this.startX;
		this.startY;
	}

	// Clear the canvas
	clear = () => {
		this.context.clearRect(0, 0, this.canvas.height, this.canvas.width);
	}

	setSize = (height,width) => {
		this.canvas.setAttribute('height', height);
		this.canvas.setAttribute('width', width);
	}

	drawBackground = (color) => {
		this.contex.fillStyle = color;
		this.contex.fillRect(0, 0, canvas.width, canvas.height);	
	}

	mouseDown = (e) => {
		e.preventDefault();
		e.stopPropagation();

		var rect = this.canvas.getBoundingClientRect();
		this.mouse.x = e.clientX - rect.left;
		this.mouse.y = e.clientY - rect.top;

		var mx = parseInt(e.clientX - rect.left);
		var my = parseInt(e.clientY - rect.top);
		
		this.position.x = e.clientX;
		this.position.y = e.clientY;

		this.network.nodesArray.forEach((node) => {
			if(node.pointInCircle(this.mouse)){
				console.log("point in circle: " + this.dragFlag);
				this.dragFlag = true;
			}
		})

		this.startX = mx;
		this.startY = my;
	} 

	mouseUp = (e) => {

		//Clear all the default setting
		e.preventDefault();
		e.stopPropagation();

		this.dragFlag = false;

		this.network.nodesArray.forEach((node) => {
				node.isdragging = false;		
		})

	}

	mouseMove = (e) => {

		if(this.dragFlag){
			e.preventDefault();
			e.stopPropagation();

			var rect = this.canvas.getBoundingClientRect();

			var mx = parseInt(e.clientX - rect.left);
			var my = parseInt(e.clientY - rect.top);
			   
			var dx = mx - this.startX;
			var dy = my - this.startY;

			this.startX = mx;
			this.startY = my;
		
			this.network.nodesArray.forEach((node) => {
				if(node.isdragging){
					node.x += dx;
					node.y += dy;
				}
			})
			this.network.draw(this);
		}else{
			e.preventDefault();
			e.stopPropagation();

			var rect = this.canvas.getBoundingClientRect();
			this.mouse.x = e.clientX - rect.left;
			this.mouse.y = e.clientY - rect.top;
		
			this.network.nodesArray.forEach((node) => {
				if(node.pointInCircle(this.mouse)){
					console.log("enter the node")
				}
			})
		}
	}
	

	dbclick = (e) => {

		var rect = this.canvas.getBoundingClientRect();
		this.mouse.x = e.clientX - rect.left, 
		this.mouse.y = e.clientY - rect.top;

		
		this.position.x = e.clientX;
		this.position.y = e.clientY;
		this.network.nodesArray.forEach((node) => {
			if(node.pointInCircle(this.mouse)){
				if(node.labelvisible){
					node.disableLabel();
				}else{
					node.showLabel();
				}
			}
		})
		this.network.draw(this);
	}
}


class Edge {
	constructor(id,from,to) {
		this.id = id;
		this.from = from;
		this.to = to;
		this.lighten = false;
	}

	drawEdge = (ctx,lineWidth) => {
		//If the edge has been lighten up
		if(this.lighten){
			ctx.beginPath();
    		ctx.moveTo(this.from.x, this.from.y);
			ctx.lineTo(this.to.x, this.to.y);
			ctx.strokeStyle = 'orange';
			ctx.lineWidth = lineWidth || 5;
    		ctx.stroke();
		}else{
			ctx.beginPath();
			ctx.moveTo(this.from.x, this.from.y);
			ctx.lineTo(this.to.x, this.to.y);
			ctx.strokeStyle = 'grey';
			ctx.lineWidth = lineWidth || 1;
			ctx.stroke();
		}
	}

	lightupEdge = () => {
		this.lighten = true;
	}

	lightdownEdge = () => {
		this.lighten = false;
	}
}


class Node{

	constructor(id,color,x,y,r,shape){
		this.id = id;
		this.color = color;
		this.r = r;
		this.shape = shape;
    	this.x = x;
		this.y = y;
		this.edgesArray = [];
		this.labelvisible = false;
		this.isdragging = false;
	}

	setImage = (img,src) => {
		this.img = img;
		this.src = src;
	}

	drawNode = (ctx) => {
		if(this.labelvisible){
			this.drawLabel(ctx);
		}
		else{
			switch (this.shape) {
				case 'circle':
					ctx.beginPath();
					ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
					ctx.stroke();
					ctx.fillStyle = this.color;
					ctx.fill();	
					ctx.closePath();
					break;
				case 'square':
					ctx.beginPath();
					ctx.rect(this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
					ctx.stroke();
					ctx.fillStyle = this.color;
					ctx.fill();	
					ctx.closePath();
					break;
				case 'image':
					this.drawImage(ctx);
					break;
				default:
					ctx.beginPath();
					ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
					ctx.stroke();
					ctx.fillStyle = this.color;
					ctx.fill();	
					// ctx.shadowBlur = 20;
					// ctx.shadowColor = "black";
					ctx.closePath();
					break;
			}
		}
	}

	drawImage = (ctx) => {
		this.img.src = this.src; 
		this.img.onload = () =>{
			ctx.save();
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.clip();
		
			ctx.drawImage(this.img, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
		
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
			ctx.clip();
			ctx.closePath();
			ctx.restore();
		};
		this.img.onload()
	}

	showLabel = ()=>{
		this.labelvisible = true;
	}

	drawLabel = (ctx) => {	
		switch (this.shape) {
			case 'circle':
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
				ctx.fillStyle = 'white';
				ctx.fill();	
				ctx.strokeStyle = "orange";
				ctx.lineWidth = 1;
				ctx.stroke();
				ctx.font = "15px Georgia";
				ctx.fillStyle = 'black';
				ctx.fillText(this.id, this.x - this.r * 0.25, this.y);
				ctx.closePath();
				break;

			case 'square':

				ctx.beginPath();
				ctx.rect(this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
				ctx.fillStyle = 'white';
				ctx.fill();	
				ctx.strokeStyle = "orange";
				ctx.lineWidth = 1;
				ctx.stroke();
				ctx.font = "15px Georgia";
				ctx.fillStyle = 'black';
				ctx.fillText(this.id, this.x - this.r * 0.25, this.y);	
				ctx.closePath();
				break;

			default:
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
				ctx.fillStyle = 'white';
				ctx.fill();	
				ctx.strokeStyle = "orange";
				ctx.lineWidth = 1;
				ctx.stroke();
				ctx.font = "15px Georgia";
				ctx.fillStyle = 'black';
				ctx.fillText(this.id, this.x - this.r * 0.25, this.y);
				ctx.closePath();
				break;
		}
	}

	disableLabel = () => {
		this.labelvisible = false;
	}

	pointInCircle = (mouse) => {
		let dx = this.x - mouse.x;
		let dy = this.y - mouse.y;
		let dist = Math.sqrt(dx*dx + dy*dy);
		
		if (dist < this.r) {
			this.isdragging = true;
			return true;
		}else{
			this.isdragging = false;
			return false;
		}
	}

	setEdgeArray = (network) => {
		network.edgesArray.forEach((edge) => {
			if(edge.from.id === this.id || edge.to.id === this.id){
				this.edgesArray.push(edge);
			}
		})
	}

	lightupEdges = () => {
		this.edgesArray.forEach((edge) => {
			edge.lightupEdge();
		})
	}

	lightdownEdges = () => {
		this.edgesArray.forEach((edge) => {
			edge.lightdownEdge();
		})
	}

}

global.Network = global.Network || Network;
global.Canvas = global.Canvas || Canvas;
global.Edge = global.Edge || Edge;
global.Node = global.Node || Node;

})(window);