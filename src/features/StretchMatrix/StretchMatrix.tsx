// import { useState } from "react";
import "./StretchMatrix.css";

import { topicDataObject } from "../../types/data.types.ts";
import { useFocusTopicContext } from "../../hooks/useFocusTopicContext.tsx";
import { panelLayoutData } from "../../data/panelLayoutData.ts";

export default function StretchMatrix() {
  return (
    <div className="matrix-container">
      {[...Array(3).keys()].map((index) => (
        <MatrixRow
          key={`row-${index}`}
          rowData={panelLayoutData[index]}
          rowIndex={index}
        />
      ))}
    </div>
  );
}

interface MatrixRowProps {
  rowData: Array<topicDataObject>;
  rowIndex: number;
}

function MatrixRow({ rowData, rowIndex }: MatrixRowProps) {
  const { handleSetHoveredRow, handleUnsetHoveredRow } = useFocusTopicContext();

  return (
    <div
      className={`single-row-container`}
      data-test={`topic-row-${rowIndex}`}
      onMouseEnter={() => handleSetHoveredRow(rowIndex)}
      onMouseLeave={handleUnsetHoveredRow}
    >
      {[...Array(4).keys()].map((index) => (
        <MatrixPanel
          key={index}
          panelData={rowData[index]}
          rowIndex={rowIndex}
          colIndex={index}
        />
      ))}
    </div>
  );
}

interface MatrixPanelProps {
  panelData: topicDataObject;
  rowIndex: number;
  colIndex: number;
}

function MatrixPanel({ panelData, rowIndex, colIndex }: MatrixPanelProps) {
  const {
    focusTopicId,
    handleSetFocusTopic,
    handleUnsetFocusTopic,
    hoveredRow,
    handleSelectTopic,
  } = useFocusTopicContext();

  return (
    // topic panel in unhovered state
    <li
      className={`panel ${!focusTopicId ? "passive-row" : focusTopicId === panelData.id ? "active" : ""} ${hoveredRow === rowIndex ? "active-row" : ""}`}
      data-test={`topic-row-${rowIndex}-col-${colIndex}`}
      onMouseEnter={() => handleSetFocusTopic(colIndex, panelData.id)}
      onMouseLeave={handleUnsetFocusTopic}
      onClick={() => handleSelectTopic(panelData.id, panelData.section)}
    >
      {/* unhovered panel heading */}
      <div className={`topic-label ${!focusTopicId ? "" : "hover-fade"}`}>
        {panelData.panelName}
      </div>
      <img // unhovered panel image
        src={`images/topic-images/${panelData.image}`}
        alt={panelData.panelName}
        className="topic-image"
      />
      {/* hover overlay */}
      <PanelOverlay panelData={panelData} />
    </li>
  );
}

interface PanelOverlayProps {
  panelData: topicDataObject;
}

function PanelOverlay({ panelData }: PanelOverlayProps) {
  const { focusTopicId } = useFocusTopicContext();

  return (
    <div
      className={`topic-overlay ${
        focusTopicId === panelData.id ? "hover-focus-panel" : ""
      }`}
      data-test={`topic-overlay-${panelData.panelName.replace(/\s/g, "").toLowerCase() || ""}`}
    >
      <div className="overlay_details">
        <h1
          className={`overlay-title ${
            focusTopicId === panelData.id ? "hover-focus-title" : ""
          }`}
        >
          {panelData.panelName}
        </h1>
        <p
          className={`overlay-body ${
            focusTopicId === panelData.id ? "hover-focus-body" : ""
          }`}
        >
          {panelData.summary}
        </p>
      </div>
      <img
        src={`images/topic-images/${panelData.image}`}
        alt={panelData.panelName}
        className="topic-panel-overlay-image-window"
      />
    </div>
  );
}
