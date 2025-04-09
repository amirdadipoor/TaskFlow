const path = require("path");

module.exports = {
    mode: "production",
    entry : {
        bundle: "./src/index.js",
    },
    output : {
        path : path.resolve(__dirname,'dist'),
        filename: "[name].[contenthash].js",
    },

}