A general purpose perceptron library.

# Usage

```
// Make an object
let perceptron = new Perceptron();

// Predict
let prediction = perceptron.predict(features);

// Get loss/error.
let loss = perceptron.getLoss(label, prediction);

// If has error/loss.
if(loss)
{
   // Train
   perceptron.train(features, loss);
}
```

# Examples

## Classification

<p align="center">
  <img width="350" height="350" src="examples/classification/img/example-1.png">
</p>``
