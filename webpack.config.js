const path = require("path");

module.exports = [
  // VAR
  {
    mode: "production",
    entry: "./index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      library: "StickyScroll",
      filename: "sticky-scroll.js"
    }
  },

  // AMD
  {
    mode: "production",
    entry: "./index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "sticky-scroll.amd.js",
      library: "StickyScroll",
      libraryTarget: "amd"
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
