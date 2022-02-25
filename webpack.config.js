const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(css|styl)$/,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};