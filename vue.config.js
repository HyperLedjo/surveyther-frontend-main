module.exports = {
  devServer: {
    // host: 'localhost',
    port: 8081,
    proxy: {
      'api': {
        target: 'http://localhost:8082',
        changeOrigin: true
      },
      'oauth2': {
        target: 'http://localhost:8082',
        changeOrigin: true
      }
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
