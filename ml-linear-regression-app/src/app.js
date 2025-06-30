// This file contains the main application logic. It initializes the TensorFlow.js model, handles the training process, and updates the display of weights and the plot of the line.

const tf = require('@tensorflow/tfjs');
const { plotLine } = require('./plot');
const { createModel } = require('./model');

const points = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 7 },
    { x: 5, y: 11 }
];

let model;
let weightsDisplay;

function setup() {
    model = createModel();
    weightsDisplay = document.getElementById('weights');
    trainModel();
}

async function trainModel() {
    const xs = tf.tensor1d(points.map(p => p.x));
    const ys = tf.tensor1d(points.map(p => p.y));

    for (let i = 0; i < 100; i++) {
        await model.fit(xs, ys, { epochs: 1 });
        updateWeightsDisplay();
        plotLine(model);
    }
}

function updateWeightsDisplay() {
    const weights = model.getWeights();
    const w0 = weights[0].dataSync()[0];
    const w1 = weights[1].dataSync()[0];
    weightsDisplay.innerText = `Weights: w0 = ${w0.toFixed(4)}, w1 = ${w1.toFixed(4)}`;
}

window.onload = setup;

