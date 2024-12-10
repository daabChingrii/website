module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(ts|tsx|js|jsx)$": "babel-jest", // Use babel-jest to transform TSX/JSX
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Ensure jest-dom is set up and setup file is included
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1", // Handle alias imports
    },
    transformIgnorePatterns: [
      "node_modules/(?!(module-to-transform|another-module)/)", // Transform ES modules if needed
    ],
  };
  