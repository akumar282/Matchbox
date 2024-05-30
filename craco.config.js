const path = require('path'); // Import the path module

module.exports = {
  webpack: {
    alias: {
      // Add path aliases here
      '@backend': path.resolve(__dirname, 'src/backend'),
      '@api': path.resolve(__dirname, 'src/API.ts'),
      '@graphql': path.resolve(__dirname, 'src/graphql'),
      '@aws-exports': path.resolve(__dirname, 'src/aws-exports.ts'),
      '@utils': path.resolve(__dirname, 'src/functions')
    },
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.experiments = {
        topLevelAwait: true,
      }
      if (env === 'production') {
        webpackConfig.devtool = false
      }
      return webpackConfig
    },
  },
};
