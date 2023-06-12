const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  // ...
  resolve: {
    fallback: {
      assert: require.resolve("assert/"),
      buffer: require.resolve("buffer/"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
    },
  },
  plugins: [
    // ...
    new NodePolyfillPlugin(),
  ],
};
