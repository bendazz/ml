# Machine Learning Linear Regression App

This project is a simple JavaScript application that demonstrates linear regression using TensorFlow.js. It allows users to visualize the training of a neural network that learns to fit a line to a set of points in a 2D plane.

## Project Structure

```
ml-linear-regression-app
├── src
│   ├── index.html        # Main HTML document
│   ├── app.js            # Application logic
│   ├── model.js          # Neural network model definition
│   └── plot.js           # Plotting functionality
├── css
│   └── styles.css        # Styles for the application
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Features

- Randomly generated points in a 2D plane.
- A neural network that learns to fit a line to the points.
- Visualization of the line and the points on the webpage.
- Display of the model's weights after each training epoch.

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd ml-linear-regression-app
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed. Then run:
   ```
   npm install
   ```

3. **Run the application:**
   You can use a simple HTTP server to serve the application. For example, you can use `http-server`:
   ```
   npx http-server src
   ```

4. **Open your browser:**
   Navigate to `http://localhost:8080` (or the port specified by your server) to view the application.

## Usage

- Upon loading the application, you will see a set of points plotted on the graph.
- The neural network will begin training, and you will see the weights update in real-time as the model learns to fit the best line to the data points.
- The plot will dynamically update to reflect the current state of the model.

## License

This project is licensed under the MIT License.