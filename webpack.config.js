const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },

    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
      ],

    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader", 
                "sass-loader" 
            ]
        }]
    },
    
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                publicPath: '../',
                hmr: process.env.NODE_ENV === 'development',
                },
            },
            'css-loader',
            ],
        },
        ],
    },
    watch: true
};
