const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

//module.exports = {
  // Entries have to resolve to files! They rely on Node
  // convention by default so if a directory contains *index.js*,
  // it resolves to that
const commonConfig = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Learning Webpack',
    }),
  ],
};

const productionConfig = () => commonConfig;

const developmentConfig = () => {
  const config = {
    devServer: {
      //Enable history AOI fallback so HTML5 History API based
     // routing works. Good for complex setups.
     historyApiFallback: true,
     
     // Display only erros to reduce te aount of output.
     stats: 'errors-only',
     
     // Parse host and port from env to allow customization.
     host: process.env.HOST, // Defaults to 'localhost'
     port: process.env.PORT, //Defaults to 8080
    },
  };
  
  return Object.assign(
    {},
    commonConfig,
    config
  );
};

module.exports = (env) => {
  if (env === 'production'){
    return productionConfig();
  }
  return developmentConfig();
};
//};