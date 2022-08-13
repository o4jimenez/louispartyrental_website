const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    port: 3010,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(jpeg|png|jpg)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.css$/,
        use: {
          loader: "css-loader",
        },
      },
    ],
  },
};
