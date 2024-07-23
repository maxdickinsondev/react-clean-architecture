module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transformIgnorePatterns: ["/node_modules/(?!(axios)/)"],
};
