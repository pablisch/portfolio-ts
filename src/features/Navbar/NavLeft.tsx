// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import { useFocusTopicContext } from "../../hooks/useFocusTopicContext.tsx";
import { useThemeContext } from "../../hooks/useThemeContext.tsx";
import projectData from "../../data/projectData.tsx";
import NavLink from "./NavLink.tsx";
import aboutData from "../../data/aboutData.tsx";
import { useScreenWidthContext } from "../../hooks/useScreenWidthContext.tsx";
import "./NavLeft.css";
import { useNavigate } from "react-router-dom";

export default function NavLeft() {
  const { handleAvatarHoverStart, handleAvatarHoverEnd } = useThemeContext();
  const { section } = useFocusTopicContext();
  const { isBurgerMenuActive } = useScreenWidthContext();

  const navigate = useNavigate();

  const handleNavTitleClick = () => {
    navigate("/projects");
  };

  return (
    <section className="nav-left" data-test="nav-left-container">
      {/* LOGO */}
      <img
        data-test="nav-logo"
        className="logo-image"
        src="/images/avatar-round-small3.png"
        alt="avatar icon"
        onMouseEnter={handleAvatarHoverStart}
        onMouseLeave={handleAvatarHoverEnd}
      />
      {/* TITLE - Current section */}
      <div
        data-test={`nav-${section}-title-btn`}
        role="button"
        onClick={handleNavTitleClick}
        className="nav-title"
      >
        <h1 data-test={`nav-${section}-title-text`}>
          {section === "projects"
            ? "My Projects"
            : section === "about"
              ? "About Me"
              : ""}
        </h1>
      </div>
      {/* Current Section links */}
      <div className="nav-list" data-test="topic-links-container">
        {/* 👇🏻 PROJECT LINKS */}
        {section === "projects" &&
          !isBurgerMenuActive &&
          projectData.map((project) => (
            <NavLink className="nav-btn" key={project.id} topic={project}>
              {project.navName || project.name}
            </NavLink>
          ))}
        {/* 👇🏻 ABOUT LINKS */}
        {section === "about" &&
          !isBurgerMenuActive &&
          aboutData.map((about) => (
            <NavLink className="nav-btn" key={about.id} topic={about}>
              {about.navName || about.name}
            </NavLink>
          ))}
      </div>
    </section>
  );
}
