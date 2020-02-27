const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const{ VueLoaderPlugin }= require('vue-loader');
 

module.exports = {
    entry: path.join(__dirname, "./src/main.js"), //模块入口
    output: {
        path: path.join(__dirname, './dist'), //输出的配置文件的目录
        filename: "bundle.js" //输出配置文件的js
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./dist/index.html"),
            filename: "index.html"
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            { //实现页面的更新
                test: /\.(htm|html)$/,
                use: [
                    'raw-loader'
                ]

            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }, {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: 'url-loader'
            },
            {//处理导入min.css 后的报错
                test:/.(png|gif|jpg|svg|ttf)$/,
                use:[
                    'file-loader'
                ]
            },
            // { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=43960'}
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
           

            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
        //   'vue$': 'vue/dist/vue.esm.js'
        }
      }
}