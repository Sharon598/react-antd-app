const path = require('path');
// const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
 
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
        // {
        //   test: /\.less$/,
        //   include: [path.resolve(__dirname, '../node_modules/antd/')],
        //   use: [{
        //     loader:'less-loader',
        //    options:{
        //       javascriptEnabled: true
        //    }
        //   }]
        // },
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
        // "@babel/plugin-transform-runtime",
        // ['import',{
        //     libraryName:'antd',
        //     libraryDirectory: 'es',
        //     style:true
        // }]
        // new CopyWebpackPlugin([{
        //     from: __dirname + '/src',
        //     to: __dirname + '/dist/js'
        // }])
        // 'babel-plugin-syntax-dynamic-import'
    ],
    optimization:{
      minimizer:[
          new UglifyJsPlugin({//压缩js
              cache:true,
              parallel:true,
              sourceMap:true
          }),
          new OptimizeCSSAssetsPlugin()//压缩css
      ],
      // 提取第三方库从包中分离：antd代码
      splitChunks:{
        cacheGroups:{
            vendors:{//node_modules里的代码
                test:/[\\/]node_modules[\\/]/,
                chunks: "initial",
                name:'vendors', //chunks name
                priority:10, //优先级
                enforce:true 
            }
        }
    }
  },
};