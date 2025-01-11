// const { path } = require("express/lib/application");

module.exports = {
    entry: "./scripts/index.js",

    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    }
};