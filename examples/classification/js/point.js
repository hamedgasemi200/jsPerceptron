class Point {
  constructor(d = 6) {
    this.d = d;
    this.x = 0;
    this.y = 0;
    this.randomize();
    this.setColor();
  }

  randomize() {
    let x = random(-width / 2 + this.d, width / 2 - this.d);
    let y = random(-height / 2 + this.d, height / 2 - this.d);
    this.setDestination(x, y);
    return this;
  }

  move(step = .5) {
    // Move in x
    if (this.x < this.dx) this.x += this.x + step > this.dx ? this.dx - this.x : step;
    else if (this.x > this.dx) this.x -= this.x - step < this.dx ? this.x - this.dx : step;

    // Move in y
    if (this.y < this.dy) this.y += this.y + step > this.dy ? this.dy - this.y : step;
    else if (this.y > this.dy) this.y -= this.y - step < this.dy ? this.y - this.dy : step;

    return this;
  }

  show() {
    let x = map(this.x, -width / 2, width / 2, 0, width);
    let y = map(this.y, -height / 2, height / 2, height, 0);

    fill(this.color);
    strokeWeight(this.d / 5);
    stroke('black');
    circle(x, y, this.d);

    return this;
  }

  setDestination(x, y) {
    this.dx = x;
    this.dy = y;
    return this;
  }

  setColor(c = undefined) {
    this.color = c ? c : [random(0, 256), random(0, 256), random(0, 256)];
    return this;
  }
}
