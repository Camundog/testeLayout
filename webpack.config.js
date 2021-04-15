const path = require('path')

module.exports = {
    entry: {
        home: './src/index.js',
        grafico: './src/grafico.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: "production",
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test:/\.scss$/,use:['style-loader', 'css-loader', 'sass-loader']},
        ]
    },
   
}