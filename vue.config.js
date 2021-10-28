module.exports = {
  // rules: {
  //   'no-console': 'off',
  // },
  devServer: {
    overlay: false,
    // host: 'localhost',
    port: 8081,
    proxy: {
      'api': {
        // target: 'http://localhost:8082',
        target: 'http://ec2-3-36-111-77.ap-northeast-2.compute.amazonaws.com:8082',
        changeOrigin: true
      },
      'oauth2': {
        // target: 'http://localhost:8082',
        target: 'http://ec2-3-36-111-77.ap-northeast-2.compute.amazonaws.com:8082',
        changeOrigin: true
      }
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
