const scrollbarSize: () => number | undefined = (function scrollbarSize(): () => number | undefined {
  let scrollbarSize: number;

  return function calculateSize(): number | undefined {
    if (scrollbarSize !== undefined) {
      return scrollbarSize;
    }

    if (window.document.readyState === "loading") {
      return void 0;
    }

    const div1: HTMLDivElement = window.document.createElement("div");
    const div2: HTMLDivElement = window.document.createElement("div");

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

export default scrollbarSize;
