import { StickyScroller } from "./index";

/**
 * Make the sticky positioned element scroll with window
 *
 * @param {string} options Selector or element or jQuery object of container.
 * Or an object of options
 */
function stickyScroller(options) {
  this.stickyscroller = new StickyScroller(this[0], options);
  return this;
}

// jQuery plugin (optional)
if (typeof jQuery !== "undefined") {
  jQuery.fn.stickyScroller = stickyScroller;
}
