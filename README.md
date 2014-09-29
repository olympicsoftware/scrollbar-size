# [scrollbar-size](https://github.com/olympicsoftware/scrollbar-size) 1.0.1

## <a name="installation-usage"></a>Installation/Usage

### Node.js ([atom-shell](https://github.com/atom/atom-shell), [node-webkit](https://github.com/rogerwang/node-webkit) etc.)

To install for usage with node.js

    npm install scrollbar-size

Then just require the module:

    var scrollbarSize = require("scrollbar-size");

The function `scrollbarSize` will return the width of scrollbars for the running
platform.

### Browser

To install in the browser just add scrollbar-size.js to your project and include
it in your html. A global function `window.scrollbarSize` will then be
available.

### Notes

The function will return undefined if it is called before the document is ready.

The size of the scrollbar is only calculated the first time the function is
called. If your platform has scrollbars that resize, this module will not work
for you.

## <a name="issues"></a>Issues

If you have any issues, you can file an issue on the
[github page](https://github.com/olympicsoftware/scrollbar-size/issues).

## <a name="license"></a>License

scrollbar-size is licensed under the [MIT license](LICENSE).
