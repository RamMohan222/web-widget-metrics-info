import React from "react";
import { randomColor } from "./util";

export default function MemoryMetrics() {
  const bTom = (v) => " " + Math.round(v / (1024 * 1024));

  return (
    <table style={{ fontSize: "x-small" }}>
      <tbody>
        <tr style={{ color: randomColor() }}>
          <td>Alloc Heap :</td>
          <td>{bTom(window.performance.memory.totalJSHeapSize)} MB</td>
        </tr>
        <tr style={{ color: randomColor() }}>
          <td>Used Heap :</td>
          <td>{bTom(window.performance.memory.usedJSHeapSize)} MB</td>
        </tr>
        <tr style={{ color: randomColor() }}>
          <td>Max Heap :</td>
          <td>{bTom(window.performance.memory.jsHeapSizeLimit)} MB</td>
        </tr>
      </tbody>
    </table>
  );
}
