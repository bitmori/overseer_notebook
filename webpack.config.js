var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.join(process.cwd(), 'main'),
    entry: './app.jsx',
    output: {
        filename: 'bundle.js'
    },
    // Turn on sourcemaps
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    },
    // Add minification
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()
    ],

    module: {
        loaders: [
            // BABEL-ES6+REACT
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};