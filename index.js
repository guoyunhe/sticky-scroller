/*
StickyScroll - scroll your very long sticky positioned sidebar

Copyright 2018 Guo Yunhe guoyunhebrave@gmail.com

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later
version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with
this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * StickyScroll main controller
 */
class StickyScroll {
  constructor(element, options) {
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
    // Do not scroll up before sticky period
    if (parentRect.top > 0 && distance > 0) {
      return;
    }
    // Do not scroll down after sticky period
    if (parentRect.bottom < window.innerHeight && distance < 0) {
      return;
    }
    this.element.scrollTop = this.element.scrollTop + distance;
  }
}

module.exports = StickyScroll;
