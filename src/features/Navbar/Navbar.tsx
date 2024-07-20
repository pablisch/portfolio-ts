// import React from 'react';
import { useSectionContext } from "../../hooks/useSectionContext.tsx";
import { extNavLinkObject } from "../../types/data.types";
import ExtNavLink from "./ExtNavLink.tsx";
import { extLinkData } from "../../data/extLinkData.tsx";
import NavLink from "./NavLink.tsx";
import projectData from "../../data/projectData.tsx";
import aboutData from "../../data/aboutData.tsx";

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export default function Navbar({ theme, setTheme }: NavbarProps) {
  const { section } = useSectionContext();

  // 👇🏻 TEMPORARY variable to mimic future functionality
  const burgerMenuStage = 0;
  const isBurgerMenuVisible = false;
  const isAvatarHovered = false;

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
      <div className="navlist">
        {/* 👇🏻 PROJECT LINKS */}
        {section === "projects" &&
          !isBurgerMenuVisible &&
          projectData.map((project) => (
            <NavLink
              className={`nav-btn nav-btn-${theme} nav-link nav-link-${theme} ${
                isAvatarHovered ? "avatar-hovered-nav-link" : ""
              }`}
              key={project.id}
              topic={project}
            >
              {project.navName || project.name}
            </NavLink>
          ))}
        {/* 👇🏻 ABOUT LINKS */}
        {section === "about" &&
          !isBurgerMenuVisible &&
          aboutData.map((about) => (
            <NavLink
              className={`nav-btn nav-btn-${theme} nav-link nav-link-${theme} ${
                isAvatarHovered ? "avatar-hovered-nav-link" : ""
              }`}
              key={about.id}
              topic={about}
            >
              {about.navName || about.name}
            </NavLink>
          ))}
      </div>
      {/* 👇🏻 EXTERNAL LINK BUTTONS */}
      {extLinkData.length &&
        burgerMenuStage < 2 &&
        extLinkData.map((exLink: extNavLinkObject) => (
          <ExtNavLink key={exLink.name} extLink={exLink} />
        ))}
    </div>
  );
}
