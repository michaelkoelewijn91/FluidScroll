const Path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    context: Path.join(__dirname, './src'),
    entry: {
        index: [
            './index.js',
        ]
    },
    output: {
        filename: `[name].js`,
        path: Path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/, exclude: /node_modules/, loader: "babel-loader"
            },
        ],
    },
};
