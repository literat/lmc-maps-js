const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    return {
        mode: 'development',
        entry: {
            index: './src/page/index.ts'
        },
        devtool: 'inline-source-map',
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'awesome-typescript-loader'
                    }
                },{
                    test: /\.(css|s[ac]ss)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                },{
                    test: /\.(png|svg|jpe?g|gif)$/,
                    use: [
                        {
                            loader: 'file-loader'
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HTMLWebpackPlugin({
                // inject: true,
                template: 'assets/index.html'
            }),
            new webpack.DefinePlugin({
                'TILESERVER_URL': JSON.stringify('http://localhost:8080')
            })
        ],
        devServer: {
            host: '0.0.0.0',
            port: 3001,
            disableHostCheck: true
        }
    }
};
