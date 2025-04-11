const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry : {
        bundle: "./src/index.js",
    },
    output : {
        path : path.resolve(__dirname,'dist'),
        filename: "[name].[contenthash].js",
    },

    devServer : {
        static: path.resolve(__dirname, "dist"), // Serve files from "dist"
        port: 8989, // Choose any port
        open: true, // Automatically open the browser
        compress: true, // Enable gzip compression
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Trello App",
            template: "./src/index.html",
            filename: "index.html",
            minify: false,
        }),
        new MiniCssExtractPlugin({
            filename:  '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
    ]

}