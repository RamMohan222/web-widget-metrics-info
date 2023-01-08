import React, { useEffect, useState } from "react";

export default function Metrics() {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    const time = performance.getEntriesByType("navigation")[0];
    const DNS = time.domainLookupEnd - time.domainLookupStart;
    const TCP = time.connectEnd - time.connectStart;
    const SSL = time.requestStart - time.secureConnectionStart;
    const TTFB = time.responseStart - time.fetchStart;
    let PageLoadTime = time.loadEventStart - time.fetchStart;
    const CompressionSavings = 1 - time.transferSize / time.decodedBodySize;
    const Request = time.responseStart - time.requestStart;
    const Load = time.loadEventEnd - time.loadEventStart;
    const DOMContentLoaded =
      time.domContentLoadedEventEnd - time.domContentLoadedEventStart;
    setMetrics({
      DNS,
      TCP,
      SSL,
      TTFB,
      PageLoadTime,
      Request,
      Load,
      DOMContentLoaded,
      CompressionSavings,
    });
  }, []);
  return (
    <>
      {Object.keys(metrics).map((m) => (
        <div style={{color: randomColor()}}>{m}:{metrics[m].toFixed(2)}</div>
      ))}
    </>
  );
}
function randomColor(){
    const maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    const randColor = randomNumber.padStart(6, 0); 
    return `#${randColor.toUpperCase()}`
}
