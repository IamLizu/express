module.exports = {
  mutate: ["lib/response.js"],
  testRunner: "mocha",
  reporters: ["html", "clear-text"],
  mochaOptions: {
    spec: ["test/**/*.js"],
  },
  coverageAnalysis: "off",
  disableTypeChecks: "/examples/**/**/**.html",
};
