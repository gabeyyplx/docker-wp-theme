const path = require("path")

module.exports = {
  entry: ["./src/assets/scripts/index.js", "./src/assets/styles/style.scss"],
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
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "theme.css",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
    ],
  },
}
