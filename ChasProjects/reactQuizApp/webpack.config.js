// webpack.config.js
const path = require('path');

module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  module: {
    rules: [
      {        
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
             presets: ['@babel/preset-react', '@babel/preset-env']
           }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
    watchContentBase: true,
    progress: true
  },
  output: {
      filename: "./main.js"
  },
};
