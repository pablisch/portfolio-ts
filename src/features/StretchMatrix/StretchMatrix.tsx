import { useState } from "react";
import "./StretchMatrix.css";

import {projectPanelData} from "../../data/projectData.tsx";
import {aboutPanelData} from "../../data/aboutData.tsx";
import { topicDataObject } from "../../types/data.types.ts";

// console.log(projectPanelData[0])
// console.log(projectPanelData[1])
// console.log(projectPanelData[2])
// console.log(projectPanelData[3])
// console.log(projectPanelData[4])
// console.log(projectPanelData[5])

const topicData = [
  [projectPanelData[0], projectPanelData[1], aboutPanelData[0], aboutPanelData[1]],
  [projectPanelData[2], projectPanelData[3], aboutPanelData[2], aboutPanelData[3]],
  [projectPanelData[4], projectPanelData[5], aboutPanelData[4], aboutPanelData[5]],
]

export default function StretchMatrix() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const handleMouseEnterRow = (index: number) => {
    setHoveredRow(index);
  };

  const handleMouseExitRow = () => {
    setHoveredRow(null);
  };

  return (
    <div className="matrix-container">
      {[...Array(3).keys()].map((index) => (
        <MatrixRow
          key={`row-${index}`}
          rowData={topicData[index]}
          rowIndex={index}
          hoveredRow={hoveredRow}
          handleMouseEnterRow={handleMouseEnterRow}
          handleMouseExitRow={handleMouseExitRow}
        />
      ))}
    </div>
  );
}

interface MatrixRowProps {
  rowData: Array<topicDataObject>;
  rowIndex: number;
  hoveredRow: number | null;
  handleMouseEnterRow: (index: number) => void;
  handleMouseExitRow: () => void;
}

function MatrixRow({
  rowData,
  rowIndex,
  hoveredRow,
  handleMouseEnterRow,
  handleMouseExitRow,
}: MatrixRowProps) {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  const handleMouseEnterCol = (index: number) => {
    setHoveredColumn(index);
  };

  const handleMouseExitCol = () => {
    setHoveredColumn(null);
  };

  // useEffect(() => {
  //   console.log(`focus - col: ${hoveredColumn}, row: ${hoveredRow}`);
  // });

  return (
    <div
      className={`single-row-container`}
      onMouseEnter={() => handleMouseEnterRow(rowIndex)}
      onMouseLeave={handleMouseExitRow}
    >
      {[...Array(4).keys()].map((index) => (
        <MatrixPanel
          key={index}
          panelData={rowData[index]}
          rowIndex={rowIndex}
          colIndex={index}
          hoveredRow={hoveredRow}
          hoveredColumn={hoveredColumn}
          onMouseEnterCol={handleMouseEnterCol}
          onMouseExitCol={handleMouseExitCol}
        />
      ))}
    </div>
  );
}

interface MatrixPanelProps {
  panelData: topicDataObject;
  rowIndex: number;
  colIndex: number;
  hoveredRow: number | null;
  onMouseEnterCol: (index: number) => void;
  onMouseExitCol: () => void;
  hoveredColumn: number | null;
}

function MatrixPanel({
  panelData,
  rowIndex,
  colIndex,
  hoveredRow,
  onMouseEnterCol,
  onMouseExitCol,
  hoveredColumn,
}: MatrixPanelProps) {
  const isHovered = hoveredColumn === colIndex;

  return (
    <li
      className={`panel ${isHovered ? "active" : hoveredColumn === null ? "passive" : ""} ${hoveredRow === rowIndex ? "active-row" : hoveredRow === null ? "passive-row" : ""}`}
      onMouseEnter={() => onMouseEnterCol(colIndex)}
      onMouseLeave={onMouseExitCol}
      
    >
      <p>{panelData.id}</p>
      <p>{panelData.panelName}</p>
      <p>{panelData.summary}</p>
    </li>
  );
}
