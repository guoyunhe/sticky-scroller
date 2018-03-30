/**
 * StickyScroll main controller
 */
class StickyScroll {
  constructor(element, options) {
    this._version = "0.1.0";
    this.newScrollPosition = 0;
    this.oldScrollPositon = 0;
    this.ticking = false;

    if (typeof element === "string") {
      this.element = document.querySelector(element);
    } else if (element instanceof HTMLElement) {
      this.element = element;
    } else {
      console.error("StickyScroll: element is required.");
      return;
    }

    this.element.style.overflowY = "hidden";

    window.addEventListener("scroll", this.onWindowScroll.bind(this));
  }

  /**
   *
   */
  onWindowScroll() {
    this.newScrollPosition = window.scrollY;

    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.translate();
        this.ticking = false;
        this.oldScrollPositon = this.newScrollPosition;
      });

      this.ticking = true;
    }
  }

  translate() {
    const parentRect = this.element.parentElement.getBoundingClientRect();
    const distance = this.newScrollPosition - this.oldScrollPositon;
    if (parentRect.top > 0) {
      return;
    }
    if (parentRect.bottom < window.innerHeight) {
      return;
    }
    this.element.scrollTop = this.element.scrollTop + distance;
  }
}

export default StickyScroll;

// Global
window.StickyScroll = StickyScroll;

// jQuery plugin (optional)
if (typeof jQuery !== "undefined") {
  /**
   * @param {string} options Selector or element or jQuery object of container.
   * Or an object of options
   */
  jQuery.fn.stickyScroll = function(options) {
    this.stickyscroll = new StickyScroll(this[0], options);
    return this;
  };
}
