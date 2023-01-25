let size = 600;
let dots = size * 2;
let points = [];
let equation = (new Line(2, 10)).setColor('black').setWidth(2);
let perceptron = (new Perceptron(-5));

function setup() {
    createCanvas(size, size);

    // Set the points.
    for (let i = 0; i < dots; i++) points[i] = (new Point(8));
}

function draw() {
    background(200);

    // Show the points and move them.
    points.forEach(point => {
        let features = [point.x, point.y, 1];
        let label = point.y < equation.f(point.x) ? 1 : -1;
        let prediction = perceptron.predict(features);
        let loss = perceptron.getLoss(label, prediction);

        // Wrong prediction
        if (loss) {
            point.setColor('red');
            perceptron.train(features, loss);
        } else {
            point.setColor('green');
        }

        // Show and then move.
        point.show().move(3);
    });

    // Get bias and slope of the perceptron.
    let [slope, bias] = [
        perceptron.weights[0] / perceptron.weights[1],
        perceptron.weights[2] / perceptron.weights[1],
    ];

    // (w0)x+(w2)b=(w1)y
    (new Line(-slope, -bias)).setColor('blue').show();

    // Show the line.
    equation.show();
}
