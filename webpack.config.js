const path = require("path");

module.exports = [
  // VAR
  {
    mode: "production",
    entry: "./index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "sticky-scroll.js"
    }
  },

  // UMD
  {
    mode: "production",
    entry: "./index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "sticky-scroll.umd.js",
      library: "StickyScroll",
      libraryTarget: "umd"
    }
  }
];
