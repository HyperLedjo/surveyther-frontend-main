module.exports = {
  proxy: {
    'api': {
      target: 'http://localhost:8082',
      changeOrigin: true
    },
    'login': {
      target: 'http://localhost:8082',
      changeOrigin: true
    },
    'logout': {
      target: 'http://localhost:8082',
      changeOrigin: true
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
