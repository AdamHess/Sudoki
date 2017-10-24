module.exports = {
    entry: './Main.ts',
    output: {
        filename: "./src/app.js"
    },
    module: {
        loaders: [
          { test: /\.ts$/, loader: 'ts-loader' }
        ]
      }
}