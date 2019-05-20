function preload(){
  img1 = loadImage("heart1.png");
  img2 = loadImage("Addictions.png");
}
function setup() {
  createCanvas(600, 800);
fill(0, 102);
  background(img2); // Draw once to give a little color
}
function draw() {
} // Empty draw() keeps the program running
function mousePressed() {
  let c = color('lightpink');
  fill(c);
  imageMode(CENTER);
  image( img1, mouseX, mouseY);
}
