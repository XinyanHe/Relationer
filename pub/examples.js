//Example 1
const net1 = new Network();
const canvas1 = new Canvas(net1);

const a1 = net1.createNode(1,'white',100,100,20,'image')
const b1 = net1.createNode(2,'white',450,90,20,'image')
const c1 = net1.createNode(3,'white',200,350,20,'image')
const d1 = net1.createNode(4,'white',350,300,20,'image')

const edge1 = net1.createEdge(1,a1,b1)
const edge2 = net1.createEdge(2,b1,c1)
const edge3 = net1.createEdge(3,a1,d1)
const edge4 = net1.createEdge(4,c1,d1)

var imga = new Image();        
a1.setImage(imga,'cat.jpg')
const imgb = new Image();
b1.setImage(imgb,'man.jpg')
const imgc = new Image();
c1.setImage(imgc,'mother.jpg')
const imgd = new Image();
d1.setImage(imgd,'women.jpg')

net1.draw(canvas1);

// Generate the explaination
const body = document.querySelector('body')
const container1 = document.createElement("div");
container1.setAttribute('class','container');

const userCase1 = document.createElement("div");
userCase1.setAttribute('class','explaination')

const des1 = document.createElement("p");
des1.innerHTML = "Usercase 1: Network graph generator(with profile).</br>"+
"You can drag the node to adjust its position and double click to light up the edges and see the node's id."

const code1Container = document.createElement("div");
code1Container.setAttribute('class','codeContainer')

const code1 = document.createElement("code");
code1.setAttribute('class','code');

code1.innerHTML = "<span class = 'grey'>//Generate the network</span></br><span class = 'blue' >const </span>" +
 "network1 = new Network();</br> " +
 "<span class = 'blue' >const </span>" +
 "canvas1= new Canvas(network1);</br>" +
 "<span class = 'grey'>//Generate the node and the edges</span></br>" +
 "<span class = 'blue' >const </span>" +
 "a1 = network1." +
 "<span class ='red'>createNode</span>"+
 "<span class = 'green'>(1,'white',100,100,20,'image')</span></br>"+

 "<span class = 'blue' >const </span>" +
 "b1 = network1." +
 "<span class ='red'>createNode</span>"+
 "<span class = 'green'>(2,'white',250,290,20,'image')</span></br>"+

 "<span class = 'blue' >const </span>" +
 "c1 = network1." +
 "<span class ='red'>createNode</span>"+
 "<span class = 'green'>(3,'white',200,350,20,'image')</span></br>"+

 "<span class = 'blue' >const </span>" +
 "d1 = network1." +
 "<span class ='red'>createNode</span>"+
 "<span class = 'green'>(4,'white',350,300,20,'image')</span></br>"+

 "<span class = 'blue' >const </span>" +
 "edge1 = network1." +
 "<span class ='red'>createEdge</span>"+
 "<span class = 'green'>(1,a1,b1)</span></br>"+

 "<span class = 'blue' >const </span>" +
 "edge2 = network1." +
 "<span class ='red'>createEdge</span>"+
 "<span class = 'green'>(2,b1,c1)</span></br>"+

 "<span class = 'blue' >const </span>" +
 "edge3 = network1." +
 "<span class ='red'>createEdge</span>"+
 "<span class = 'green'>(3,a1,d1)</span></br>"+

 "<span class = 'blue' >const </span>" +
 "edge4 = network1." +
 "<span class ='red'>createEdge</span>"+
 "<span class = 'green'>(4,c1,d1)</span></br>"+

 "<span class = 'grey'>//Set the image of each node</span></br>"+

 "<span class = 'blue' >var </span>" +
 "imga = new Image();</br>" +
 "a1." +
 "<span class ='red'>setImage</span>"+
 "<span class = 'green'>(imga,'cat.jpg')</span></br>"+

 "<span class = 'blue' >var </span>" +
 "imgb = new Image();</br>" +
 "b1." +
 "<span class ='red'>setImage</span>"+
 "<span class = 'green'>(imgb,'man.jpg')</span></br>"+

 "<span class = 'blue' >var </span>" +
 "imgc = new Image();</br>" +
 "c1." +
 "<span class ='red'>setImage</span>"+
 "<span class = 'green'>(imgc,'mother.jpg')</span></br>"+

 "<span class = 'blue' >var </span>" +
 "imgd = new Image();</br>" +
 "d1." +
 "<span class ='red'>setImage</span>"+
 "<span class = 'green'>(imgd,'woman.jpg')</span></br>"+

 "<span class = 'grey'>//Generate the graph</span></br>"+
 "network1.draw(canvas1);" 

code1Container.append(code1)

userCase1.append(des1);
userCase1.append(code1Container);

container1.append(userCase1)
container1.append(canvas1.div)
body.append(container1);

//Example 2
const net2 = new Network();
const canvas2= new Canvas(net2);

const a2 = net2.createNode(1,'blue',190,420,15,'square')
const b2 = net2.createNode(2,'black',520,360,15,'square')
const c2 = net2.createNode(3,'blue',170,150,15,'square')
const d2 = net2.createNode(4,'pink',370,500,15,'square')

const edge6 = net2.createEdge(1,a2,b2)
const edge7 = net2.createEdge(2,b2,c2)
const edge8 = net2.createEdge(3,a2,d2)
const edge9 = net2.createEdge(4,c2,d2)

net2.draw(canvas2);

// Generate the explaination
const container2 = document.createElement("div");
container2.setAttribute('class','container');

const userCase2 = document.createElement("div");
userCase2.setAttribute('class','explaination')

const des2 = document.createElement("p");
des2.innerHTML = "Usercase 2: Network graph generator(with normal shape).</br> "+
"You can drag the node to adjust its position and double click to light up the edges and see the node's id."

const code2Container = document.createElement("div");
code2Container.setAttribute('class','codeContainer')

const code2 = document.createElement("code");
code2.setAttribute('class','code');
code2.innerHTML = "<span class = 'grey'>//Generate the network</span></br><span class = 'blue' >const </span>" +
 "network2 = new Network();</br> " +
 "<span class = 'blue' >const </span>" +
 "canvas2= new Canvas(network2);</br>" +
 "<span class = 'grey'>//Generate the node and the edges</span></br>" +
 "<span class = 'blue' >const </span>" +
 "a2 = network2." +
 "<span class ='red'>createNode</span>"+
 "<span class = 'green'>(1,'blue',190,120,15,'square')</span></br>"+

 "<span class = 'blue' >const </span>" +
 "b2 = network2." +
 "<span class ='red'>createNode</span>"+
 "<span class = 'green'>(2,'black',220,250,15,'square')</span></br>"+

  "<span class = 'blue' >const </span>" +
 "c2 = network2." +
 "<span class ='red'>createNode</span>"+
 "<span class = 'green'>(3,'blue',470,50,15,'square')</span></br>"+

 "<span class = 'blue' >const </span>" +
 "d2 = network2." +
 "<span class ='red'>createNode</span>"+
 "<span class = 'green'>(4,'pink',370,200,15,'square')</span></br>"+

 "<span class = 'blue' >const </span>" +
 "edge6 = network2." +
 "<span class ='red'>createEdge</span>"+
 "<span class = 'green'>(1,a2,b2)</span></br>"+

 "<span class = 'blue' >const </span>" +
 "edge7 = network2." +
 "<span class ='red'>createEdge</span>"+
 "<span class = 'green'>(2,b2,c2)</span></br>"+

 "<span class = 'blue' >const </span>" +
 "edge8 = network2." +
 "<span class ='red'>createEdge</span>"+
 "<span class = 'green'>(3,a2,d2)</span></br>"+

 "<span class = 'blue' >const </span>" +
 "edge9 = network2." +
 "<span class ='red'>createEdge</span>"+
 "<span class = 'green'>(4,c2,d2)</span></br>"+
 "<span class = 'grey'>//Generate the graph</span></br>"+
 "network2.draw(canvas2);" 

code2Container.append(code2)

userCase2.append(des2);
userCase2.append(code2Container);

container2.append(userCase2)
container2.append(canvas2.div)
body.append(container2);

//Example3
const net3 = new Network();
const canvas3= new Canvas(net3);

net3.randomGenerator();

net3.draw(canvas3);

// Generate the explaination
const container3 = document.createElement("div");
container3.setAttribute('class','container');

const userCase3 = document.createElement("div");
userCase3.setAttribute('class','explaination')

const des3 = document.createElement("p");
des3.innerHTML = "Usercase 3: Random graph generator</br>" +
"You can drag the node to adjust its position and double click to light up the edges and see the node's id."

const code3Container = document.createElement("div");
code3Container.setAttribute('class','codeContainer')

const code3= document.createElement("code");
code3.setAttribute('class','code');
code3.innerHTML = "<span class = 'grey'>//Generate the network</span></br><span class = 'blue' >const </span>" +
"network3 = new Network();</br> " +
"<span class = 'blue' >const </span>" +
"canvas3= new Canvas(network3);</br>" +
"<span class = 'grey'>//Call the random generator</span></br>" +
"network3.randomGenerator()</br>" + 
"<span class = 'grey'>//Generate the graph</span></br>"+
"network3.draw(canvas3);" 

code3Container.append(code3)

userCase3.append(des3);
userCase3.append(code3Container);

container3.append(userCase3)
container3.append(canvas3.div)
body.append(container3);