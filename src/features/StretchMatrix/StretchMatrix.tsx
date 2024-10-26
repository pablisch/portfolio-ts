// import { useState } from "react";
import "./StretchMatrix.css";

import { projectPanelData } from "../../data/projectData.tsx";
import { aboutPanelData } from "../../data/aboutData.tsx";
import { topicDataObject } from "../../types/data.types.ts";
import { useFocusTopicContext } from "../../hooks/useFocusTopicContext.tsx";

const topicData = [
  [
    projectPanelData[0],
    projectPanelData[1],
    aboutPanelData[0],
    aboutPanelData[1],
  ],
  [
    projectPanelData[2],
    projectPanelData[3],
    aboutPanelData[2],
    aboutPanelData[3],
  ],
  [
    projectPanelData[4],
    projectPanelData[5],
    aboutPanelData[4],
    aboutPanelData[5],
  ],
];

export default function StretchMatrix() {
  return (
    <div className="matrix-container">
      {[...Array(3).keys()].map((index) => (
        <MatrixRow
          key={`row-${index}`}
          rowData={topicData[index]}
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
