const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
  },
  mode:"production",
  module: {
    rules: [
        
      {
        test: /\.(js|jsx)$/, // Apply rule to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel loader to transpile JavaScript files
          options: {
            presets: ['@babel/preset-env'], // Use preset-env for Babel
          },
        },
      },
      {
        test: /\.css$/, // Apply rule to .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
      },
       ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // Serve files from the dist directory
    compress: true, // Enable gzip compression
    port: 9000, // Set port number
  },
};
