const path = require("path");
const webpackConfigBase = require("./webpack.base.config");
const CleanWebpackPlugin = require("clean-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require("webpack-merge");

const webpackConfigProd = {
    mode: "production",
    plugins:[
        // new  CleanWebpackPlugin(
        // //   ["build"],{
        // // root: path.join(__dirname,"../")
        // // }
        // )
        // new BundleAnalyzerPlugin({ analyzerPort: 8081 }),
        // 清空打包文件
        new CleanWebpackPlugin('dist/*.*', {
          root: __dirname,
          verbose: true,
          dry: false
        }),
      new MiniCssExtractPlugin({//提取css
        filename:'css/main.css'
    }),
    ]
};

module.exports = merge(webpackConfigBase, webpackConfigProd);