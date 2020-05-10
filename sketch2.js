function preload () {
  img1 =loadImage("instaworst.png");
  img2 =loadImage("IMNOTSAD.jpg");
  img3 =loadImage("IMNOTSAD.jpg");
  img4 =loadImage("IMNOTSAD.jpg");
  img5 =loadImage("IMNOTSAD.jpg");
}
function setup() {
  createCanvas(800, 800);
  noStroke();
  fill(0);
  
}

function draw() {
  noTint();
  background(img1);
  if ((mouseX <= 400) && (mouseY <= 400)) {
    tint('pink');
    image(img2, 0, 0);   // Upper-left
  }
  else if ((mouseX <= 400) && (mouseY > 400)) {              tint('yellow');
    image(img3, 0, 400);  // Lower-left
  }
  else if ((mouseX > 400) && (mouseY <= 400)) {
    tint('lightgreen');
    image(img4, 400, 0);  // Upper-right
  }
  else {
    tint('magenta');
    image(img5, 400, 400); // Lower-right
  }
}
