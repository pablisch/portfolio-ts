import React from "react";
import { useSectionContext } from "../../hooks/useSectionContext.tsx";
import { useThemeContext } from "../../hooks/useThemeContext.tsx";
import projectData from "../../data/projectData.tsx";
import NavLink from "./NavLink.tsx";
import aboutData from "../../data/aboutData.tsx";
import { useScreenWidthContext } from "../../hooks/useScreenWidthContext.tsx";

export default function NavLeft() {
  const [isAvatarHovered, setIsAvatarHovered] = React.useState(false);
  const { theme } = useThemeContext();
  const { section } = useSectionContext();
  const { isBurgerMenuActive } = useScreenWidthContext();

  const handleNavTitleClick = () => {
    console.log("NavTitle clicked");
  };

  return (
    <section className="nav-left">
      <img
        id="nav-logo"
        className={`logo-image logo-image-${theme}`}
        // src='/images/pablo-circle-avatar.png'
        src="/images/avatar-square-small4.png"
        alt="avatar icon"
        onMouseEnter={() => setIsAvatarHovered(true)}
        onMouseLeave={() => setIsAvatarHovered(false)}
      />
      <div
        role="button"
        onClick={handleNavTitleClick}
        className={`nav-title nav-title-${theme} ${
          isAvatarHovered ? "avatar-hovered-nav-title" : ""
        } ${section === "projects" ? "projects-title" : "abouts-title"}`}
      >
        <h1 id="nav-section-title-text">
          {section === "projects"
            ? "My Projects"
            : section === "about"
              ? "About Me"
              : ""}
        </h1>
      </div>
      <div className="navlist">
        {/* 👇🏻 PROJECT LINKS */}
        {section === "projects" &&
          !isBurgerMenuActive &&
          projectData.map((project) => (
            <NavLink
              className={`nav-btn nav-btn-${theme} nav-link nav-link-${theme}`}
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
    </section>
  );
}

// export default NavLeft;
