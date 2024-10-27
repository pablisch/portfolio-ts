// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import { useThemeContext } from "../../hooks/useThemeContext.tsx";
import { Link } from "react-router-dom";
import { useFocusTopicContext } from "../../hooks/useFocusTopicContext.tsx";
import { useScreenWidthContext } from "../../hooks/useScreenWidthContext.tsx";
import { extLinkData } from "../../data/extLinkData.tsx";
import { extNavLinkObject, sectionType } from "../../types/data.types.ts";
import ExtNavLink from "./ExtNavLink.tsx";
import "./NavRight.css";
import "./Hamburger.css";
const settings = false;

export default function NavRight() {
  const { theme, handleThemeChange, isIconRotating } = useThemeContext();
  const { section, toggleSection } = useFocusTopicContext();
  const {
    burgerMenuStage,
    handleBurgerClick,
    isBurgerMenuOpen,
    isBurgerMenuActive,
  } = useScreenWidthContext();
  return (
    <section className="nav-right nav-list" data-test="nav-right-container">
      {/* 👇🏻 LINK TO PROJECTS SECTION */}
      {section === sectionType.abouts && burgerMenuStage < 3 && (
        <Link
          onClick={toggleSection}
          to="/"
          data-test="projects-section-link"
          className="nav-btn nav-section-link"
        >
          Software Projects
        </Link>
      )}
      {/* 👇🏻 LINK TO ABOUT ME SECTION */}
      {section === sectionType.projects && burgerMenuStage < 3 && (
        <Link
          onClick={toggleSection}
          to="/about-me"
          data-test="about-section-link"
          className="nav-btn nav-section-link"
        >
          More About Me
        </Link>
      )}
      {/* 👇🏻 EXTERNAL LINK BUTTONS */}
      {extLinkData.length &&
        burgerMenuStage < 2 &&
        extLinkData.map((exLink: extNavLinkObject) => (
          <ExtNavLink key={exLink.name} extLink={exLink} />
        ))}

      {/* Theme btn */}
      <div
        role="button"
        data-test="theme-btn"
        className="nav-btn theme-btn"
        onClick={handleThemeChange}
      >
        {`${theme} Theme`}
      </div>

      {/* Settings btn */}
      {settings && (
        <div
          role="button"
          data-test="settings-nav-btn"
          className="nav-btn github-link-btn settings-btn"
          onClick={() => console.log("Settings button clicked")}
        >
          <img
            data-test="settings-icon"
            src="/images/settings-gear.png"
            alt="settings button"
            className={`github-logo settings-icon ${
              isIconRotating ? "rotate" : ""
            }`}
          />
        </div>
      )}
      {isBurgerMenuActive && (
        <div className="hamburger-box">
          <div
            data-test="hamburger"
            className="hamburger"
            onClick={handleBurgerClick}
          >
            <span
              className={`burger-bar bun-top ${
                isBurgerMenuOpen ? "burger-open" : ""
              }`}
            ></span>
            <span
              className={`burger-bar pattie ${
                isBurgerMenuOpen ? "burger-open" : ""
              }`}
            ></span>
            <span
              className={`burger-bar bun-base ${
                isBurgerMenuOpen ? "burger-open" : ""
              }`}
            ></span>
          </div>
        </div>
      )}
    </section>
  );
}
