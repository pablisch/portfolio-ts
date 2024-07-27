import { useSectionContext } from "../../hooks/useSectionContext.tsx";
import { useThemeContext } from "../../hooks/useThemeContext.tsx";
import projectData from "../../data/projectData.tsx";
import NavLink from "./NavLink.tsx";
import aboutData from "../../data/aboutData.tsx";
import { useScreenWidthContext } from "../../hooks/useScreenWidthContext.tsx";
import "./NavLeft.css";

export default function NavLeft() {
  const { theme, handleAvatarHoverStart, handleAvatarHoverEnd } =
    useThemeContext();
  const { section } = useSectionContext();
  const { isBurgerMenuActive } = useScreenWidthContext();

  const handleNavTitleClick = () => {
    console.log("NavTitle clicked");
  };

  return (
    <section className="nav-left">
      <img
        data-test="nav-logo"
        className={`logo-image logo-image-${theme}`}
        // src='/images/pablo-circle-avatar.png'
        src="/images/avatar-square-small4.png"
        alt="avatar icon"
        onMouseEnter={handleAvatarHoverStart}
        onMouseLeave={handleAvatarHoverEnd}
      />
      <div
        data-test="nav-section-title-btn"
        role="button"
        onClick={handleNavTitleClick}
        className={`nav-title ${section === "projects" ? "projects-title" : "abouts-title"}`}
      >
        <h1 data-test="nav-section-title-text">
          {section === "projects"
            ? "My Projects"
            : section === "about"
              ? "About Me"
              : ""}
        </h1>
      </div>
      <div className="nav-list" data-test="topic-links-container">
        {/* 👇🏻 PROJECT LINKS */}
        {section === "projects" &&
          !isBurgerMenuActive &&
          projectData.map((project) => (
            <NavLink
              className="nav-btn nav-link"
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
            <NavLink className="nav-btn nav-link" key={about.id} topic={about}>
              {about.navName || about.name}
            </NavLink>
          ))}
      </div>
    </section>
  );
}
