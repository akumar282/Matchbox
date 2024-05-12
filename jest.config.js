module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@backend/(.*)$': '<rootDir>/src/backend/$1',
    '^@api$': '<rootDir>/src/API.ts',
    '^@graphql/(.*)$': '<rootDir>/src/graphql/$1',
    '^@aws-exports$': '<rootDir>/src/aws-exports.ts',
    '^@utils/(.*)$': '<rootDir>/src/functions/$1'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json', // Path to your tsconfig.json file.
    },
  },
};
