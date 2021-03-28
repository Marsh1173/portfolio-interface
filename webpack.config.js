const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/ts/main.tsx",
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
        path: path.resolve(__dirname, "public/js"),
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};
