class Line {
  constructor(a, b) {
    this.slope = a;
    this.bias = b;
    this.setColor();
    this.setWidth();
  }

  setColor(c = 'black') {
    this.color = c;
    return this;
  }

  setWidth(w = 1) {
    this.width = w;
    return this;
  }

  f(x) {
    return (this.slope * x) + this.bias;
  }

  show(Color = 'black') {
    let y0 = this.f(-width / 2);
    y0 = map(y0, -height / 2, height / 2, height, 0);

    let y1 = this.f(width / 2);
    y1 = map(y1, -height / 2, height / 2, height, 0);

    strokeWeight(this.width);
    stroke(color(this.color));
    line(0, y0, width, y1);
  }
}
