# Relationer.js
Relationer is a javascript library for building the network graphs. Use it whenever you want to generate a network graph for showing different object’s relationships.

## Get started
First, include the relationer.js in your library.
```html
<script src="relationer.js"/><script>
```
Get the body element of the current DOM
```
const body = document.querySelector('body');
```
Create a network
```
network = new Network();
```
Create a canvas to display your network.
```
canvas = new Canvas(network);
```
Pass in the infomation and generate your nodes.
```
const node1 = network.createNode(id,color,x-position,y-position,radius,shape)
```
If the node you want to generate requires a profile, you should also pass in the image
```
const node2 = network.createNode(id,color,x-position,y-position,radius,'image')
var img = new Image();
node2.setImage(img,'src.jpg')
```
Generate a edge if you want
```
const edge = network.createEdge(edgeId,startNode,endNode)
```
Finally, draw the network graph!!
```
network.draw(canvas);
```
## Link to the library
https://relationer.herokuapp.com

## Link to the documentation of the library
https://relationer.herokuapp.com/document.html