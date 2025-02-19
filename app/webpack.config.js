const path = require('path');

const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

const crateDirectory = path.resolve(__dirname, './rustproject')

// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  experiments: {
    asyncWebAssembly: true,
  },
  module: {
    // rules: [{ test: /\.asm$/, use: 'raw-loader' }],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: { 
        mangle: true, // не сохранять имена переменных
      }
    })],
  },
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // new CopyWebpackPlugin({
    //   patterns: [
    //       { from: 'static' }
    //   ]
    // }),
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new WasmPackPlugin({
      crateDirectory: crateDirectory, // Путь до директории с вашим Rust-кодом
      watchDirectories: [ // Указываем директории для отслеживания изменений
        path.resolve(crateDirectory, './modules'),
        path.resolve(crateDirectory, './src')
      ],
  })
  ],
  mode: 'development', // Режим разработки
  devtool: 'inline-source-map', // Карты исходников для дебага
  devServer: { // Настройки devServer для HMR
    static: [
      './dist',
      // {
      //   directory: path.join(__dirname, 'static/jsspeccy'),
      //   publicPath: '/jsspeccy',
      // },
    ],
    hot: true,
    open: true,
    port: 8080,
  }
  // watch: true, // Включаем режим слежения за изменениями файлов
};