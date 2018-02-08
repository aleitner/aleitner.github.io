var stars = [];
var starCount = 400;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  createStarfield();
  canvas.position(0,0);
  canvas.style('z-index', '-1');
}

function draw() {
  background(0);
  moveStarField();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function createStarfield() {
  for (var i = 0; i < starCount; i++) {
    stars[i] = new Star();
  }
}

function moveStarField() {
  for (var i = 0; i < starCount; i++) {
    stars[i].move();
    stars[i].display();
  }
}
