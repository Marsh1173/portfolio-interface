const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const contentBase = path.join(__dirname, "public");

module.exports = {
  entry: "./src/ts/main.tsx",
  devServer: {
    port: 3000,
    static: {
      directory: contentBase,
    },
    historyApiFallback: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      // This disables the production of random bundle.js.LICENSE.txt files in the output
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  output: {
    filename: "bundle.js",
    path: contentBase,
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".less", ".css"],
  },
};
