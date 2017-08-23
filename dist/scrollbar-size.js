(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scrollbarSize = (function scrollbarSize() {
        var scrollbarSize;
        return function calculateSize() {
            if (scrollbarSize !== undefined) {
                return scrollbarSize;
            }
            if (window.document.readyState === "loading") {
                return void 0;
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
});
//# sourceMappingURL=scrollbar-size.js.map