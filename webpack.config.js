const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)$/,
        use: 'ts-loader',
          exclude: /node_modules/,

      },
      {
        test: /\.worker\.js$/,
        use: { loader: "worker-loader" },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    globalObject: "self",
  },
  plugins: [
    new NodePolyfillPlugin({
      excludeAliases: ["console"]
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};
