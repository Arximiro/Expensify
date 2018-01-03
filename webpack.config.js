const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
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
               use: CSSExtract.extract({
                  use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }                        
                  ] 
               })
           }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }    
    };
};
