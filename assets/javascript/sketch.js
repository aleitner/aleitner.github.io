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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  createSection(this.currentDisplay);
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

function createSection(section) {
  if (section == 'cosplay') {
    deleteBoxes();
    createBox(50, 100, width - 50, height - 10);
    this.currentDisplay = 'cosplay';
  }

  if (section == 'projects') {
    deleteBoxes();
    createBox(50, 100, width - 50, height - 10);
    this.currentDisplay = 'projects';
  }

  if (section == 'about') {
    deleteBoxes();
    createBox(50, 100, width - 50, height - 10);
    this.currentDisplay = 'about';
  }
}
