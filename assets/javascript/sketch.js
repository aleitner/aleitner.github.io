var stars = [];
var boxes = [];
var starCount = 400;
var currentDisplay;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  createStarfield();
  canvas.position(0,0);
  canvas.style('z-index', '-1');
}

function draw() {
  background(0);
  moveStarField();
  drawBoxes();
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

function deleteBoxes() {
  while (boxes.length) { boxes.pop(); }
}

function drawBoxes() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].drawBox();
  }
}

function createBox(x, y, boxWidth, boxHeight) {
  boxes.push(new Box(x, y, boxWidth, boxHeight));
}
