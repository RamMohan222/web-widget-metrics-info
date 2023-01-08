import React, { useState } from "react";
import Details from "./Details";

function App({ domElement }) {
  const cssClass =
    domElement.getAttribute("js_widget_css_class") || "js_widget__content__";
  const [open, isOpened] = useState(false);
  if (open)
    return (
      <Details
        title="Page Metrics"
        data="Enter comment message"
        onClose={isOpened}
      />
    );

  return (
    <span className={cssClass} onClick={() => isOpened(!open)}>
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect
            stroke="#000"
            id="svg_1"
            height="10"
            width="7"
            y="14"
            x="0"
            fill="#ff0000"
          />
          <rect
            stroke="#000"
            id="svg_2"
            height="15"
            width="7"
            y="7"
            x="7"
            fill="#00bf00"
          />
          <rect
            stroke="#000"
            id="svg_3"
            height="20"
            width="7"
            y="0"
            x="14"
            fill="#0000bf"
          />
        </g>
      </svg>
    </span>
  );
}

export default App;
