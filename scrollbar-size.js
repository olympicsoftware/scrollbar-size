(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.scrollbarSize = factory();
    }
}(this, function() {
    var scrollbarSize = null;

    return function() {
        if (scrollbarSize !== null)
            return scrollbarSize;

        if (window.document.readyState === "loading")
            return void 0;

        var div1, div2;

        div1 = window.document.createElement('div');
        div2 = window.document.createElement('div');

        div1.style.width = '100px';
        div1.style.overflowX = 'scroll';
        div2.style.width = '100px';

        window.document.body.appendChild(div1);
        window.document.body.appendChild(div2);

        scrollbarSize = div1.offsetHeight - div2.offsetHeight;

        window.document.body.removeChild(div1);
        window.document.body.removeChild(div2);

        return scrollbarSize;
    }
}));