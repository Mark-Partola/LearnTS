module.exports = {
    entry: './src/injector.ts',
    output: {
        path: './dist/',
        filename: 'bundle.js'
    },
    resolve: {
        extentions: ['', '.ts']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts-loader'}
        ]
    }
};