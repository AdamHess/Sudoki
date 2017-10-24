const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: './Main.ts',
    output: {
        filename: "./src/app.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        modules: 
        [ path.join(__dirname, "./node_modules")]
        
    },
    module: {
        loaders: [
          { test: /\.ts$/, loader: 'ts-loader' }
        ]
      },
      externals: {
          'underscore': {
             root: "_",
             commonjs: "underscore",
             amd: "underscore"
             
          }
      }

}