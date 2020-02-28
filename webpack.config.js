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
            
            // {
            //     test: /\.(png|jpg|gif|jpeg|svg|ttf)$/,
            //     use: [{
            //       loader: 'url-loader',
            //       // loader: 'file-loader',
            //       options: {
            //         esModule: false, // 这里设置为false
            //         name: '[name].[ext]',
            //         limit: 10240
            //       }
            //     }]
            //   },
           
            // { test: /\.(jpg|png|gif|bmp|jpeg|ttf)$/, use: 'url-loader?limit=10240&name=[name].[ext]'}, // 处理 图片路径的 loader,后面直接加 use: 'url-loader?limit=10240&name=[name].[ext]&esModule=false'会报错
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