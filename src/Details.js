import React from "react";
import ResourceMetrics from "./ResourceMetrics";
import MemoryMetrics from "./MemoryMetrics";

export default function Details({ data, title, onClose }) {
  // const [comment, setComment] = React.useState(data);
  return (
    <>
      <div
        style={{
          outline: "solid 1px #a2a8d3",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#e7eaf6",
        }}
      >
        <span style={{
          marginTop: '10px',
          color: '#38598b',
          display: 'flex',
          flexFlow: 'row',
          justifyContent: 'space-between',
        }}>
          <strong style={{ marginLeft: '10px' }}>{title}</strong>
          <div style={{ marginRight: '6px' }}>
            <a
              rel="noreferrer"
              className='btn'
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/Performance/Navigation_and_resource_timings">?</a>
            <button className='btn' onClick={() => onClose(false)}>x</button>
          </div>
        </span>
        <div
          style={{
            height: 105,
            width: 300,
            margin: 10,
            boxShadow: '0px 0px 15px -3px rgba(0,0,0,0.1)',
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
        {/* <div>
          <textarea
            onChange={(e) => setComment(e.target.value)}
            style={{
              maxHeight: 70,
              maxWidth: 300,
              minHeight: 30,
              minWidth: 300,
            }}
            value={comment}
          />
        </div> */}
        <div>
          {/* <button className='btn' onClick={() => onClose(false)}>Submit</button> */}
          {/* <button className='btn' onClick={() => onClose(false)}>Close</button> */}
        </div>
      </div>
    </>
  );
}
