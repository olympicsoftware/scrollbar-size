"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scrollbarSize = (function () {
    var scrollbarSize;
    return function () {
        if (scrollbarSize != null) {
            return scrollbarSize;
        }
        var div1 = window.document.createElement("div");
        var div2 = window.document.createElement("div");
        div1.style.width = "100px";
        div1.style.overflowX = "scroll";
        div2.style.width = "100px";
        window.document.body.appendChild(div1);
        window.document.body.appendChild(div2);
        scrollbarSize = div1.offsetHeight - div2.offsetHeight;
        window.document.body.removeChild(div1);
        window.document.body.removeChild(div2);
        return scrollbarSize;
    };
})();
exports.default = scrollbarSize;
//# sourceMappingURL=scrollbar-size.js.map