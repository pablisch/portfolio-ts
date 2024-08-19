import { useEffect, useState } from "react";
import "./StretchMatrix.css";

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
          // className={`row`}
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
  rowIndex: number;
  hoveredRow: number | null;
  handleMouseEnterRow: (index: number) => void;
  handleMouseExitRow: () => void;
}

function MatrixRow({
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

  useEffect(() => {
    console.log(`focus - col: ${hoveredColumn}, row: ${hoveredRow}`);
  });

  return (
    <div
      className={`single-row-container`}
      onMouseEnter={() => handleMouseEnterRow(rowIndex)}
      onMouseLeave={handleMouseExitRow}
    >
      {[...Array(4).keys()].map((index) => (
        <MatrixPanel
          key={index}
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
  rowIndex: number;
  colIndex: number;
  hoveredRow: number | null;
  onMouseEnterCol: (index: number) => void;
  onMouseExitCol: () => void;
  hoveredColumn: number | null;
}

function MatrixPanel({
  rowIndex,
  colIndex,
  hoveredRow,
  onMouseEnterCol,
  onMouseExitCol,
  hoveredColumn,
}: MatrixPanelProps) {
  const isHovered = hoveredColumn === colIndex;

  return (
    <div
      className={`panel ${isHovered ? "active" : hoveredColumn === null ? "passive" : ""} ${hoveredRow === rowIndex ? "active-row" : hoveredRow === null ? "passive-row" : ""}`}
      onMouseEnter={() => onMouseEnterCol(colIndex)}
      onMouseLeave={onMouseExitCol}
    >
      {/*<p className="text">{`Column ${colIndex}`}</p>*/}
      {/*<p className="text">{`Row ${rowIndex}`}</p>*/}
    </div>
  );
}
