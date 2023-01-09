import React, { useState } from "react";
import ResourceMetrics from "./ResourceMetrics";
import MemoryMetrics from "./MemoryMetrics";

export default function Details({ data, title, onClose }) {
  const [comment, setComment] = useState(data);
  return (
    <>
      <div
        style={{
          outline: "solid 1px black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "yellowgreen",
        }}
      >
        <strong>{title}</strong>
        <div
          style={{
            height: 105,
            width: 300,
            margin: 10,
            outline: "solid 1px black",
            backgroundColor: "white",
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(100px, 1fr))",
            gap: 10,
          }}
        >
          <span>
            <ResourceMetrics />
          </span>
          <span>
            <MemoryMetrics />
          </span>
        </div>
        <div>
          <textarea
            onChange={(e) => setComment(e.target.value)}
            style={{
              maxHeight: 100,
              maxWidth: 300,
              minHeight: 30,
              minWidth: 300,
            }}
            value={comment}
          />
        </div>
        <div>
          <button onClick={() => onClose(false)}>Submit</button>
          <button onClick={() => onClose(false)}>Close</button>
        </div>
      </div>
    </>
  );
}
