let img1;
let img3;


var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

var x, y, w, h; // Location and size
var offsetX, offsetY; // Mouseclick offset

function preload() {
  img1 = loadImage("cool.png");
  img3 = loadImage("EYE.png");

}

function setup() {
  createCanvas(400, 600);

  // Starting location
  x = 150;
  y = 100;
  // Dimensions
  w = 300;
  h = 350;
}

function draw() {
  background(img1);



  // Is mouse over object
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  } else {
    rollover = false;
  }

  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }

  stroke(0);
  // Different fill based on state
  if (dragging) {
    fill(50);
  } else if (rollover) {
    fill(100);
  } else {
    fill(175, 200);
  }
  image(img3, x, y, w, h);
}

function mousePressed() {
  // Did I click on the rectangle?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = x - mouseX;
    offsetY = y - mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
}