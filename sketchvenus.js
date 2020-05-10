function preload(){
  img1 = loadImage("trappedgirl.jpg");
  img2 = loadImage("blurry.png");
}

function setup() {
  createCanvas(510, 610);
  background(img1); 
}

function draw() {
  background(img1);
 image(img2, mouseX,mouseY, 400,500);
}

function mousePressed() {
 background('#000fff');
  image(img2, mouseX,mouseY, 30,30);
}

