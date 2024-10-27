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
  const rowDataIds = rowData.map((data) => data.id);

  return (
    <div className={`single-row-container`} data-test={`topic-row-${rowIndex}`}>
      {[...Array(4).keys()].map((index) => (
        <MatrixPanel
          key={index}
          panelData={rowData[index]}
          rowIndex={rowIndex}
          colIndex={index}
          rowDataIds={rowDataIds}
        />
      ))}
    </div>
  );
}

interface MatrixPanelProps {
  panelData: topicDataObject;
  rowIndex: number;
  colIndex: number;
  rowDataIds: Array<string>;
}

function MatrixPanel({
  panelData,
  rowIndex,
  colIndex,
  rowDataIds,
}: MatrixPanelProps) {
  const {
    hoveredTopicId,
    handleSetHoveredTopic,
    handleUnsetHoveredTopic,
    handleSelectTopic,
  } = useFocusTopicContext();

  return (
    // topic panel in unhovered state
    <li
      className={`panel ${!hoveredTopicId ? "passive-row" : hoveredTopicId === panelData.id ? "active" : ""} ${rowDataIds.includes(hoveredTopicId) ? "active-row" : ""}`}
      data-test={`topic-row-${rowIndex}-col-${colIndex}`}
      onMouseEnter={() => handleSetHoveredTopic(panelData.id)}
      onMouseLeave={handleUnsetHoveredTopic}
      onClick={() => handleSelectTopic(panelData.id, panelData.section)}
    >
      {/* unhovered panel heading */}
      <div className={`topic-label ${!hoveredTopicId ? "" : "hover-fade"}`}>
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
  const { hoveredTopicId } = useFocusTopicContext();

  return (
    <div
      className={`topic-overlay ${
        hoveredTopicId === panelData.id ? "hover-focus-panel" : ""
      }`}
      data-test={`topic-overlay-${panelData.panelName.replace(/\s/g, "").toLowerCase() || ""}`}
    >
      <div className="overlay_details">
        <h1
          className={`overlay-title ${
            hoveredTopicId === panelData.id ? "hover-focus-title" : ""
          }`}
        >
          {panelData.panelName}
        </h1>
        <p
          className={`overlay-body ${
            hoveredTopicId === panelData.id ? "hover-focus-body" : ""
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
