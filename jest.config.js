module.exports = {
  // The root of your source code, typically where Jest should look for files to run tests against
  roots: ["<rootDir>/client"],
  
  // A list of file extensions that Jest should look for
  moduleFileExtensions: ["js", "jsx"],
  
  // A list of paths to modules that Jest should use to look for test files
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  
  // A list of paths to directories that Jest should use to look for test files
  testPathIgnorePatterns: ["/node_modules/"],
  
  // A list of reporter names that Jest should use to report test results
  reporters: ["default"],
  
  // A list of transformers that Jest should use to transform code before running tests
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  
  // A list of options to pass to the test environment
  testEnvironmentOptions: {
    enzymeAdapter: "react16"
  },
  
  // A list of options to pass to the code coverage reporter
  coverageReporters: ["text", "html"],

  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  // Add the following line to exclude .scss files from Jest's parsing
  modulePathIgnorePatterns: ["<rootDir>/client/styles.scss"],
};
