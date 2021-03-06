const path = require('path');
module.exports = {
  context: __dirname,
  entry: "./frontend/entry.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|png|jpg)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false",
        ],
      },
    ],
  },
  devtool: "source-map",
};