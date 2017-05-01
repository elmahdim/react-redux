import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']}
        ]
    }
};