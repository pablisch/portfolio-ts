// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import NavLeft from "./NavLeft.tsx";
import NavRight from "./NavRight.tsx";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-container">
          <NavLeft />
          <NavRight />
        </div>
      </div>
      <div className={`nav-border-bar-1`}></div>
      <div className={`nav-border-bar-2`}></div>
      <div className={`nav-border-bar-3`}></div>
    </nav>
  );
}
