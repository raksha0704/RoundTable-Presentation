canvasHeight = 700;
canvasWidth = 700;

//lamp
lampX = 350;
cordLength = 30;

//window
widthWindow = 350;
heightWindow = 450;

//source : https://p5js.org/examples/color-linear-gradient.html
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis == 'Y_AXIS') {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == 'X_AXIS') {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}

function setup(){
	createCanvas(canvasWidth, canvasHeight);
}

function draw(){
	//the scene of a window in a room

	//the wall
	wall();

	lamp();

	drawWindow();
}

function wall(){
	c1 = color(255, 230, 201);
  	c2 = color(226, 178, 122);
	setGradient(0, 0, canvasWidth, canvasHeight, c1, c2, 'Y_AXIS');
}

function lamp(){
	//cord
	stroke(0);
	strokeWeight(2);
	line(lampX, 0, lampX, cordLength);

	//holder
	fill(109, 59, 0);
	noStroke();
	triangle(lampX, cordLength, lampX - 50, cordLength + 30, lampX + 50, cordLength + 30);
	fill(201, 165, 122);
	ellipse(lampX, cordLength + 30, 96, 10);

	//bulb
	fill(255);
	ellipse(lampX, cordLength + 35, 20, 20);
}

function drawWindow(){
	strokeWeight(5);
	stroke(196, 163, 123);
	rect(175, 120, widthWindow, heightWindow);
}





