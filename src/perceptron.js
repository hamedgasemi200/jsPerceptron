class Perceptron {
  constructor(lr = 0.001) {
    this.learning_rate = lr;
    
    this.weights = [];    
    this.bias = 1;
  }
  
  train(features, answer) {
    // The length of the feature array determines the length of the weights array
    if (features.length != this.weights.length) this.weights = features;
    
    // Predict
    let prediction = this.predict(features);
    
    // if the prediction is not correct
    if(prediction != answer)
    {
      // The gradient or the error
      let gradient = answer - prediction;
      
      // Iterate through the weights
      for(let i = 0; i < this.weights.length; i++) {
        // Try to get the correct weight
        this.weights[i] += gradient * features[i] * this.learning_rate;
      }
      
      this.bias += gradient;
    }
  }
  
  sum (features) {
    // Stop if all the features don't have weight
    if (features.length !== this.weights.length) return null;
    
    // Iterate through the weights
    let sum = 0;
    for(let i = 0; i < this.weights.length; i++) {
      // Sum the input*weight
      sum += this.weights[i] * features[i];
    }
    sum += this.bias;
    
    return sum;
  }
  
  activate(sum) {
    // Return the prediction
    return sum < 0 ? -1 : 1;
  }
  
  predict(features) {
    return this.activate(this.sum(features));
  }
}
