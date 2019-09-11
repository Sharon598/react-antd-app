
const path = require("path");
const merge = require("webpack-merge");
const webpackConfigBase = require("./webpack.base.config");
 
const webpackConfigDev = {
    devtool: 'cheap-module-eval-source-map',
    mode:'development',
    // plugins:[
    //     new BundleAnalyzerPlugin()
    // ],
    devServer:{
      contentBase: './dist',
      hot: true,
      proxy: {
          '/api': {
              target: 'http://47.111.94.159:18091'
          }
      }
    }
}

module.exports = merge(webpackConfigBase, webpackConfigDev);