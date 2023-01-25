let size = 600;
let dots = size * 2;
let points = [];
let equation = (new Line(2, 10)).setColor('blue');
let perceptron = new Perceptron(Math.pow(10, -5));

function setup() {
  createCanvas(size, size);

  // Set the points.
  for (let i = 0; i < dots; i++) points[i] = (new Point(8));
}

function draw() {
  background(200);

  // Show the points and move them.
  points.forEach(point => {
    let features = [point.x, point.y];
    let prediction = perceptron.predict(features);
    let label = point.y > equation.f(point.x) ? 1 : -1;

    perceptron.train(features, label, prediction);
    point.setColor(label === prediction ? 'lightgreen' : 'red')

    // Show and then move.
    point.show().move(3);
  });

  // Show perceptron line.
  (new Line(-perceptron.weights[0] / perceptron.weights[1], -perceptron.bias / perceptron.weights[1])).setColor('black').show();

  // Show the line.
  equation.show();
}
