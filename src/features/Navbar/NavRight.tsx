import { useThemeContext } from "../../hooks/useThemeContext.tsx";
import { Link } from "react-router-dom";
import { useSectionContext } from "../../hooks/useSectionContext.tsx";
import { useScreenWidthContext } from "../../hooks/useScreenWidthContext.tsx";
import { extLinkData } from "../../data/extLinkData.tsx";
import { extNavLinkObject } from "../../types/data.types.ts";
import ExtNavLink from "./ExtNavLink.tsx";

export default function NavRight() {
  const { theme, handleThemeChange, isIconRotating } = useThemeContext();
  const { section } = useSectionContext();
  const {
    burgerMenuStage,
    handleBurgerClick,
    isBurgerMenuOpen,
    isBurgerMenuActive,
  } = useScreenWidthContext();
  return (
    <section className="nav-right navlist">
      {/* 👇🏻 LINK TO PROJECTS SECTION */}
      {section === "about" && burgerMenuStage < 3 && (
        <Link
          to="/"
          id="projects-section-link"
          className={`nav-btn nav-btn-${theme} nav-section-link nav-section-link-${theme}`}
        >
          Software Projects
        </Link>
      )}
      {/* 👇🏻 LINK TO ABOUT ME SECTION */}
      {section === "projects" && burgerMenuStage < 3 && (
        <Link
          to="/more-about-me"
          id="about-section-link"
          className={`nav-btn nav-btn-${theme} nav-section-link nav-section-link-${theme} `}
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
        id="settings-nav-btn"
        className={`nav-btn nav-btn-${theme} github-link-btn github-link-btn-${theme} settings-btn settings-btn-${theme}`}
        onClick={handleThemeChange}
      >
        <img
          id="settings-icon"
          src="/images/settings-gear.png"
          alt="settings button"
          className={`github-logo github-logo-${theme} settings-icon settings-icon-${theme} ${
            isIconRotating ? "rotate" : ""
          }`}
        />
      </div>
      {isBurgerMenuActive && (
        <div className="hamburger-box">
          <div id="hamburger" className="hamburger" onClick={handleBurgerClick}>
            <span
              className={`burger-bar burger-bar-${theme} buntop ${
                isBurgerMenuOpen ? "burger-open" : ""
              }`}
            ></span>
            <span
              className={`burger-bar burger-bar-${theme} pattie ${
                isBurgerMenuOpen ? "burger-open" : ""
              }`}
            ></span>
            <span
              className={`burger-bar burger-bar-${theme} bunbase ${
                isBurgerMenuOpen ? "burger-open" : ""
              }`}
            ></span>
          </div>
        </div>
      )}
    </section>
  );
}
