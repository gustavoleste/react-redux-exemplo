const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
        entry: './src/index.js',
        output: {
                path: path.join(__dirname, 'docs'),
                filename: 'main.js'
        },

        module: {
                rules: [
                        {
                                test: /\.js$/, 
                                use: 'babel-loader',
                                exclude: /node_modules/
                        }
                ]
        },

        mode: 'production',

        plugins: [
                new HtmlWebpackPlugin({
                        template: './src/index.html'
                })
        ]
}