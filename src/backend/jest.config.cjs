// jest.config.cjs
module.exports = {
  testEnvironment: "node",
  transform: {}, // no usamos Babel
  testMatch: [
    "**/__tests__/**/*.test.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
    "**/__tests__/**/*.test.mjs",
    "**/?(*.)+(spec|test).mjs"
  ],
  verbose: true
};