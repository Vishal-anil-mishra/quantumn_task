const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    // entry: ["webpack/hot/dev-server", "./src/index2.ts"],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                include: [path.resolve(__dirname, "src")],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 8000,
    },
};
