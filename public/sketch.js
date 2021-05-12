var socket;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing);
}

function newDrawing(data) {
  noStroke();
  fill(100, 150, 20);
  ellipse(data.x, data.y, 20, 20);
}
function mouseDragged() {
  console.log('Sending: '+ mouseX.toFixed(0) + ',' + mouseY.toFixed(0));   //////////////////////////        
  var data = {
    x: mouseX.toFixed(0),
    y: mouseY.toFixed(0)
  }
  socket.emit('mouse', data);
  
  noStroke();
  fill(200, 50, 200);
  ellipse(mouseX, mouseY, 20, 20);
}

function draw() {
  //console.log("Connected to server");
}