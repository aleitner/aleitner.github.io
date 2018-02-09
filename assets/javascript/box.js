function Box(x, y, boxWidth, boxHeight) {
    this.startX = x;
    this.startY = y;
    this.xLine1 = x;
    this.yLine1 = y;
    this.xLine2 = x;
    this.yLine2 = y;
    this.boxWidth = boxWidth;
    this.boxHeight = boxHeight;
    this.drawSpeed = 20;

    this.drawBox = function() {
      fill('#87E9F1');
      strokeWeight(10);
      stroke(255);

      if (this.xLine1 < this.boxWidth) {
        this.xLine1 += this.drawSpeed;

        if (this.xLine1 > this.boxWidth) {
          this.xLine1 = this.boxWidth;
        }
      }

      line(this.startX,this.startY,this.xLine1,this.startY);

      if (this.xLine1 >= this.boxWidth) {
        if (this.yLine1 < this.boxHeight) {
          this.yLine1 += this.drawSpeed;

          if (this.yLine1 > this.boxHeight) {
            this.yLine1 = this.boxHeight;
          }
        }

        line(this.boxWidth,this.startY,this.boxWidth,this.yLine1);
      }

      if (this.yLine2 < this.boxHeight) {
        this.yLine2 += this.drawSpeed;

        if (this.yLine2 > this.boxHeight) {
          this.yLine2 = this.boxHeight;
        }
      }

      line(this.startX,this.startY,this.startX,this.yLine2);

      if (this.yLine2 >= this.boxHeight) {
        if (this.xLine2 < this.boxWidth) {
          this.xLine2 += this.drawSpeed;

          if (this.xLine2 > this.boxWidth) {
            this.xLine2 = this.boxWidth;
          }
        }

        line(this.startX,this.boxHeight,this.xLine2,this.boxHeight);

      }

    }
}
