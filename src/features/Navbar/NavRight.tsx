// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import { useThemeContext } from "../../hooks/useThemeContext.tsx";
import { Link } from "react-router-dom";
import { useSectionContext } from "../../hooks/useSectionContext.tsx";
import { useScreenWidthContext } from "../../hooks/useScreenWidthContext.tsx";
import { extLinkData } from "../../data/extLinkData.tsx";
import { extNavLinkObject } from "../../types/data.types.ts";
import ExtNavLink from "./ExtNavLink.tsx";
import "./NavRight.css";
import "./Hamburger.css";

export default function NavRight() {
  const { handleThemeChange, isIconRotating } = useThemeContext();
  const { section } = useSectionContext();
  const {
    burgerMenuStage,
    handleBurgerClick,
    isBurgerMenuOpen,
    isBurgerMenuActive,
  } = useScreenWidthContext();
  return (
    <section className="nav-right nav-list" data-test="nav-right-container">
      {/* 👇🏻 LINK TO PROJECTS SECTION */}
      {section === "about" && burgerMenuStage < 3 && (
        <Link
          to="/"
          data-test="projects-section-link"
          className="nav-btn nav-section-link"
        >
          Software Projects
        </Link>
      )}
      {/* 👇🏻 LINK TO ABOUT ME SECTION */}
      {section === "projects" && burgerMenuStage < 3 && (
        <Link
          to="/more-about-me"
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
      <div
        role="button"
        data-test="settings-nav-btn"
        className="nav-btn github-link-btn settings-btn"
        onClick={handleThemeChange}
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
