const path = require("path");

module.exports = [
  // VAR
  // Load through link and use as variable without import
  // Do NOT use it with Webpack or Browserify
  {
    mode: "production",
    entry: "./index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      library: "StickyScroll",
      filename: "sticky-scroll.js"
    }
  },

  // VAR NO EXPORTS - jQuery Plugin
  // Load through link and use as jQuery plugin
  // Do NOT use it with Webpack or Browserify
  {
    mode: "production",
    entry: "./jquery.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "sticky-scroll.jquery.js"
    }
  },

  // AMD
  // Import with RequireJS
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
  // Import with SystemJS
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
