import React, { useState } from "react";
import Metrics from "./Metrics";

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
          backgroundColor:'yellowgreen'
        }}
      >
        <strong>{title}</strong>
        <div
          style={{
            height: 180,
            width: 300,
            margin: 10,
            outline: "solid 1px black",
            backgroundColor:'white'
          }}
        >
          <span><Metrics/></span>
        </div>
        <div>
          <textarea
            onChange={(e) => setComment(e.target.value)}
            style={{ maxHeight: 100, maxWidth: 300, minHeight:50, minWidth:300 }}
          >
            {comment}
          </textarea>
        </div>
        <div>
          <button onClick={() => onClose(false)}>Submit</button>
          <button onClick={() => onClose(false)}>Close</button>
        </div>
      </div>
    </>
  );
}
