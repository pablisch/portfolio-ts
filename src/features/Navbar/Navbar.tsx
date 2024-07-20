// import React from 'react';
import { useSectionContext } from "../../hooks/useSectionContext.tsx";
import { extNavLinkObject } from "../../types/data.types";
import ExtNavLink from "./ExtNavLink.tsx";
import { extLinkData } from "../../data/extLinkData.tsx";

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export default function Navbar({ theme, setTheme }: NavbarProps) {
  const { section } = useSectionContext();

  // 👇🏻 TEMPORARY variable to mimic future functionality
  const burgerMenuStage = 0;

  const handleThemeClick = () => {
    if (theme === "normal") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("normal");
    }
  };

  return (
    <div>
      navbar
      <div>{section}</div>
      <button onClick={handleThemeClick}>
        {theme === "normal" ? "normal" : theme === "dark" ? "dark" : "light"}
      </button>
      {/* 👇🏻 EXTERNAL LINK BUTTONS */}
      {extLinkData.length &&
        burgerMenuStage < 2 &&
        extLinkData.map((exLink: extNavLinkObject) => (
          <ExtNavLink key={exLink.name} extLink={exLink} />
        ))}
    </div>
  );
}
