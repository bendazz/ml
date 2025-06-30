const tf = require('@tensorflow/tfjs');

function createModel() {
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
    return model;
}

async function trainModel(model, inputs, labels, epochs) {
    const xs = tf.tensor2d(inputs, [inputs.length, 1]);
    const ys = tf.tensor2d(labels, [labels.length, 1]);

    for (let i = 0; i < epochs; i++) {
        const history = await model.fit(xs, ys, {epochs: 1});
        const weights = model.layers[0].getWeights()[0].dataSync();
        const bias = model.layers[0].getWeights()[1].dataSync();
        console.log(`Epoch ${i + 1}: w1 = ${weights[0]}, w0 = ${bias[0]}`);
    }
}

function predict(model, input) {
    const inputTensor = tf.tensor2d([input], [1, 1]);
    const output = model.predict(inputTensor);
    return output.dataSync()[0];
}

module.exports = { createModel, trainModel, predict };