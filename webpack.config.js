const path = require("path")

module.exports = {
  entry: "./src/assets/scripts/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./src/dist"),
  },
  module: {
    rules: [
      {
        test: /\.mj?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
}
