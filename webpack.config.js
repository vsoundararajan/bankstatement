var webpack = require('webpack');

/*
  entry entries         'script!jquery/dist/jquery.min.js',
          'script!foundation-sites/dist/foundation.min.js',

*/
module.exports = {
    entry: [
        './app/app.js'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin   ({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true
    }
};

// "inline-source-map" or "eval-source-map" instead.
