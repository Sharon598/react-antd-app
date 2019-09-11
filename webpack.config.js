const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    // historyApiFallback: true,
    // contentBase: "./",
    // quiet: false, //控制台中不输出打包的信息
    // noInfo: false,
    // // hot: true, //开启热点
    // inline: true, //开启页面自动刷新
    // lazy: false, //不启动懒加载
    // progress: true, //显示打包的进度
    // watchOptions: {
    //     aggregateTimeout: 300
    // },
    // port: '8088', //设置端口号
    //其实很简单的，只要配置这个参数就可以了
    proxy: {
        '/api': {
            target: 'http://47.111.94.159:18091'
            
            // secure: false
        }
    }
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
};