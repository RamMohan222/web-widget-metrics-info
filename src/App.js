import React from "react";

function App({ domElement }) {
  const cssClass = domElement.getAttribute("js_widget_css_class") || "js_widget__content__";
  // bytes to mb
  const bTom = (v) => Math.round(v / (1024 * 1024));

  return (
    <table className={cssClass}>
      <tbody>
        <tr>
          <td>Alloc Heap:</td>
          <td>{bTom(window.performance.memory.totalJSHeapSize)} MB</td>
        </tr>
        <tr>
          <td>Used Heap:</td>
          <td>{bTom(window.performance.memory.usedJSHeapSize)} MB</td>
        </tr>
        <tr>
          <td>Max Heap:</td>
          <td>{bTom(window.performance.memory.jsHeapSizeLimit)} MB</td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
