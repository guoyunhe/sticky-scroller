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
      library: "StickyScroller",
      filename: "sticky-scroller.js"
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
      filename: "sticky-scroller.jquery.js"
    }
  },

  // AMD
  // Import with RequireJS
  {
    mode: "production",
    entry: "./index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "sticky-scroller.amd.js",
      library: "StickyScroller",
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
      filename: "sticky-scroller.umd.js",
      library: "StickyScroller",
      libraryTarget: "umd"
    }
  }
];
