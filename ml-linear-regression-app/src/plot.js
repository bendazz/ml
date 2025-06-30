const canvas = document.getElementById('plotCanvas');
const ctx = canvas.getContext('2d');

function drawLine(w0, w1, xMin, xMax) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw axes
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = '#000';
    ctx.stroke();

    // Calculate y values for the line
    const yMin = w0 + w1 * xMin;
    const yMax = w0 + w1 * xMax;

    // Scale the coordinates to fit the canvas
    const scaleX = canvas.width / (xMax - xMin);
    const scaleY = canvas.height / (Math.max(yMin, yMax) - Math.min(yMin, yMax));

    // Draw the line
    ctx.beginPath();
    ctx.moveTo((xMin - xMin) * scaleX, canvas.height - (yMin - Math.min(yMin, yMax)) * scaleY);
    ctx.lineTo((xMax - xMin) * scaleX, canvas.height - (yMax - Math.min(yMin, yMax)) * scaleY);
    ctx.strokeStyle = 'red';
    ctx.stroke();
}

function plotDataPoints(dataPoints) {
    ctx.fillStyle = 'blue';
    dataPoints.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, canvas.height - point.y, 5, 0, Math.PI * 2);
        ctx.fill();
    });
}

function updatePlot(w0, w1, dataPoints) {
    const xMin = -10;
    const xMax = 10;
    drawLine(w0, w1, xMin, xMax);
    plotDataPoints(dataPoints);
}