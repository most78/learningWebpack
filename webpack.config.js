const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require ('webpack-merge');
const parts = require('./webpack.parts');
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

//module.exports = {
  // Entries have to resolve to files! They rely on Node
  // convention by default so if a directory contains *index.js*,
  // it resolves to that
const commonConfig = merge ([
    {
        entry: {
         app:PATHS.app,
        },
        output: {
            path: PATHS.build,
            filename: '[name].js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Learning webpack',
            }),
        ],
    },
    parts.lintJavaScript({include: PATHS.app}),
]);


const productionConfig = () => merge([]);

const developmentConfig = merge ([
    parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT,
    }),
]);

module.exports = (env) =>{
    if (env === 'prodcution'){
        return merge(commonConfig, productionConfig);
    }
    return merge(commonConfig, developmentConfig);
};
