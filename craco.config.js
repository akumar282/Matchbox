const path = require('path'); // Import the path module

module.exports = {
  webpack: {
    alias: {
      // Add path aliases here
      '@backend': path.resolve(__dirname, 'src/backend'),
      '@api': path.resolve(__dirname, 'src/API.ts'),
      '@graphql': path.resolve(__dirname, 'src/graphql'),
      '@aws-exports': path.resolve(__dirname, 'src/aws-exports.ts'),
    },
    configure: {
      experiments: {
        topLevelAwait: true,
      },
    },
  },
};
