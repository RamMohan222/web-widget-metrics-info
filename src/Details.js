import React from "react";
import ResourceMetrics from "./ResourceMetrics";
import MemoryMetrics from "./MemoryMetrics";

export default function Details({ data, title, onClose }) {
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
            <a href="none" className='btn' onClick={() => onClose(false)}>x</a>
          </div>
        </span>
        <div
          style={{
            height: 110,
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
      </div>
    </>
  );
}
