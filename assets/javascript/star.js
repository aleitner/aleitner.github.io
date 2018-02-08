function Star() {
  this.x = random(0, screen.width);
  this.y = random(0, screen.height);
  this.speed = random(1,2);
  this.size = random(1,4);

  this.move = function() {
    if (this.y > screen.height) {
      this.y = 0;
      this.speed = random(1,2);
      this.size = random(1,4);
    }

    this.y = this.y + this.speed;
  }

  this.display = function() {
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
