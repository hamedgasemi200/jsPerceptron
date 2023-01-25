class Perceptron {
    weights = [];

    constructor(lr = -5) {
        this.setLearningRate(lr);
    }

    setWeights(weights) {
        this.weights = weights;
        return this;
    }

    setLearningRate(lr) {
        this.learning_rate = Math.pow(10, lr);
        return this;
    }

    getLoss(label, prediction) {
        return label - prediction;
    }

    train(features, error) {
        // The length of the feature array must be the same as weights.
        if (features.length !== this.weights.length) this.weights = features;

        // Iterate through the feature weights.
        for (let i = 0; i < this.weights.length; i++) {
            // Try to get the correct weight
            this.weights[i] += error * features[i] * this.learning_rate;
        }
    }

    sum(features) {
        // If features and wieghts are not equal.
        if (features.length !== this.weights.length) this.setWeights(features);

        // Iterate through the weights.
        let sum = 0;
        for (let i = 0; i < this.weights.length; i++) {
            // Sum the input*weight
            sum += this.weights[i] * features[i];
        }

        // return sum.
        return sum;
    }

    activate(sum) {
        return sum < 0 ? -1 : 1
    }

    predict(features) {
        return this.activate(this.sum(features));
    }
}
