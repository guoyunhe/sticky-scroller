# Sticky Scroller

Scroll your very long sticky positioned sidebar.

![Screen recording](https://thumbs.gfycat.com/VigorousMiniatureHerculesbeetle-size_restricted.gif)

## Why do we need JavaScript?

`position: sticky` is a very useful and interesting CSS3 feature. When scrolling
page, navbar/header/sidebar can magically switch between `static` and `fixed`
position. Usually, height of sticky element is smaller than viewport height. It
means you do not need to scroll the content of sticky element.

However, when you have a sidebar with a long list and it is not able to show all
content in viewport, `position: sticky` cannot help with this. When you scroll
the page, sidebar content doesn't scroll.

You may come up with a quick solution:

```css
sidebar {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}
```

Then you can scroll sidebar content, right?

![Screenshot](https://i.imgur.com/gijYunB.png)

Here are some disadvantages of above solution:

1.  You have two long scroll bars on the page and it is annoying.
2.  Scroll in a sticky/fixed element cause issues on all browsers, especially
    mobile browsers. You unexpectedly scroll the whole page instead of floating
    content sometimes.
3.  Users have to move mouse from one area to another area to scroll content. It
    is not a good user experience.
4.  Some users prefer to use keyboard to scroll page. They cannot scroll
    floating content with keyboard.

So how JavaScript can make a difference?

JavaScript syncronize scrolling of page and sticky sidebar.

1.  To avoid ugly multiple scroll bars, it forces `overflow-y: hidden` for
    floating container.
2.  Even with `overflow-y: hidden`, content can still be scrolled by JavaScript.
3.  When page is scrolled down / up, floating content will be scrolled in the
    same way.
4.  Since it listens to `window`, you can point mouse cursor anywhere on the
    page, or even use keyboard.
5.  Scrolling syncronization has the same behavior on all modern browsers. No
    unexpected scrolling conflicts anymore.

## Download / Install

### NPM + Webpack / Browserify

Install with NPM.

```
npm install sticky-scroller --save
```

Import with Webpack or Browserify.

```js
// Old way
var StickyScroller = require("sticky-scroller");

// New way
import StickyScroller from "sticky-scroller";
```

### Download and Link

Download latest release and unpack, you will need `dist/sticky-scroller.js`.

Link it in HTML.

```html
<!-- Option 1: Vanilla JavaScript -->
<script src="path/to/sticky-scroller/dist/sticky-scroller.js"></script>

<!-- Option 2: use jQuery plugin (not recommended) -->
<script src="path/to/sticky-scroller/dist/sticky-scroller.jquery.js"></script>
```

### RequireJS

AMD package is build for you if you prefer RequireJS.

```html
<script src="path/to/sticky-scroller/dist/sticky-scroller.amd.js"></script>
```

```js
requirejs(["StickyScroller"], function(StickyScroller) {
  // What ever you like
});
```

### SystemJS

UMD module is placed at `dist/sticky-scroller.umd.js`

## Usage

Change `top` and `height` (or `max-height`) to whatever you like. Make sure it
is within viewport. You don't need `overflow-y: hidden` since it will be added
by JavaScript.

```css
.my-sidebar {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  height: 100vh;
}
```

```js
const scroller = new StickyScroller(".my-sidebar");
```

If you prefer to use it with jQuery:

```js
$(".my-sidebar").stickyScroller();
```

## API

### StickyScroller(element, options)

Constructor of main controller.

#### element `string` | `HTMLElement`

The sticky element. Use a selector string or HTMLElement object.

#### options `Object`

No option available now.

## Copyright

Copyright 2018 Guo Yunhe.

## License

GNU General Public License version 3 or later.
