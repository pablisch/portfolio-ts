// import React from 'react';
import { useSectionContext } from "../../hooks/useSectionContext.tsx";
import { extNavLinkObject } from "../../types/data.types";
import ExtNavLink from "./ExtNavLink.tsx";
import { extLinkData } from "../../data/extLinkData.tsx";
import NavLink from "./NavLink.tsx";
import projectData from "../../data/projectData.tsx";
import aboutData from "../../data/aboutData.tsx";
import { useScreenWidthContext } from "../../hooks/useScreenWidthContext.tsx";
import { useThemeContext } from "../../hooks/useThemeContext.tsx";

export default function Navbar() {
  const { theme, handleThemeChange } = useThemeContext();
  const { isBurgerMenuActive, burgerMenuStage } = useScreenWidthContext();
  const { section } = useSectionContext();

  // 👇🏻 TEMPORARY variable to mimic future functionality
  const isAvatarHovered = false;

  return (
    <div>
      navbar
      <div>{section}</div>
      <button onClick={handleThemeChange}>
        {theme === "light" ? "light" : theme === "dark" ? "dark" : "colour"}
      </button>
      <div className="navlist">
        {/* 👇🏻 PROJECT LINKS */}
        {section === "projects" &&
          !isBurgerMenuActive &&
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
          !isBurgerMenuActive &&
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
