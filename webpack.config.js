const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const contentBase = path.join(__dirname, "public");

module.exports = {
    entry: "./src/ts/main.tsx",
    devServer: {
        watchContentBase: true,
        port: 3000,
        contentBase,
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
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
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};
