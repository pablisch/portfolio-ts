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
  // const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  const {
    handleSetHoveredRow,
    handleUnsetHoveredRow,
    // hoveredRow,
  } = useFocusTopicContext();

  // const handleMouseEnterCol = (index: number) => {
  //   setHoveredColumn(index);
  // };
  //
  // const handleMouseExitCol = () => {
  //   setHoveredColumn(null);
  // };

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
    hoveredColumn,
    hoveredRow,
  } = useFocusTopicContext();

  console.log("row:", hoveredRow, "col:", hoveredColumn);
  console.log("selected topic:", focusTopicId);

  return (
    <li
      className={`panel ${!focusTopicId ? "passive-row" : focusTopicId === panelData.id ? "active" : ""} ${hoveredRow === rowIndex ? "active-row" : ""}`}
      // className={`panel ${isHovered ? "active" : hoveredColumn === null ? "passive" : ""} ${hoveredRow === rowIndex ? "active-row" : hoveredRow === null ? "passive-row" : ""}`}
      onMouseEnter={() => handleSetFocusTopic(colIndex, panelData.id)}
      onMouseLeave={handleUnsetFocusTopic}
    >
      <img
        src={`images/topic-images/${panelData.image}`}
        alt={panelData.panelName}
        className="topic-image"
      />
      {/*<p>{panelData.id}</p>*/}
      {/*<p>{panelData.panelName}</p>*/}
      {/*<p>{panelData.summary}</p>*/}

      {/*<div*/}
      {/*  className={`project-label ${*/}
      {/*    focusProjectId === panelData.id ? 'hover-fade' : ''*/}
      {/*  }`}>*/}
      {/*  {panelData.panelName}*/}
      {/*</div>*/}

      {/*<div*/}
      {/*  onClick={() => handleClick(project)}*/}
      {/*  className={`project-overlay project-overlay-${theme} ${*/}
      {/*    focusProjectId === project.id || isAvatarHovered ? 'hover-focus' : ''*/}
      {/*  }`}>*/}
      {/*  {project.summary}*/}
      {/*</div>*/}
    </li>
  );
}
