const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk-bundle.js",
        clean: true,
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", "..."],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {loader: "ts-loader"},
            },
        ]
    },
    optimization: {
        splitChunks: {
            // chunks: "all",
        },
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
};
