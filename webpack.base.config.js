const path = require('path');
// const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
 
module.exports = {
    entry: {
      app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        // publicPath: ''
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader',
            'less-loader'
          ]
        },
        {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.resolve(__dirname, 'src')
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        // new CopyWebpackPlugin([{
        //     from: __dirname + '/src',
        //     to: __dirname + '/dist/js'
        // }])
    ]
};