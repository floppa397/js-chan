const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "./dist"),
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
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                // @see https://webpack.js.org/guides/asset-modules/
                resourceQuery: /resource/,
                type: "asset/resource",
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
