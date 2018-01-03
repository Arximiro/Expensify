// entry => output

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
       rules: [{
           loader: 'babel-loader',
           test: /\.js$/,            // This filters only files that end in .js. the \ is an escape character so we can use the . before js.
           exclude: /node_modules/
       },{
           test: /\.s?css$/,  // The ? makes the s optional so it supports both scss and css. The $ means that it needs to be at the end of the filename.
           use: [
               'style-loader',
               'css-loader',
               'sass-loader'
           ]
       }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }    
};