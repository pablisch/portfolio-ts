// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import { useFocusTopicContext } from "../../hooks/useFocusTopicContext.tsx";
import { useThemeContext } from "../../hooks/useThemeContext.tsx";
import projectData from "../../data/projectData.tsx";
import NavTopicLink from "./NavTopicLink.tsx";
import aboutData from "../../data/aboutData.tsx";
import { useScreenWidthContext } from "../../hooks/useScreenWidthContext.tsx";
import "./NavLeft.css";
import { useNavigate } from "react-router-dom";
import { sectionType } from "../../types/data.types.ts";

export default function NavLeft() {
  const { handleAvatarHoverStart, handleAvatarHoverEnd } = useThemeContext();
  const { section } = useFocusTopicContext();
  const { isBurgerMenuActive } = useScreenWidthContext();

  const navigate = useNavigate();

  const handleNavTitleClick = () => {
    navigate("/");
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
          {section === sectionType.projects
            ? "My Projects"
            : section === sectionType.abouts
              ? "About Me"
              : ""}
        </h1>
      </div>
      {/* Current Section links */}
      <div className="nav-list" data-test="topic-links-container">
        {/* 👇🏻 PROJECT LINKS */}
        {section === sectionType.projects &&
          !isBurgerMenuActive &&
          projectData.map((project) => (
            <NavTopicLink className="nav-btn" key={project.id} topic={project}>
              {project.navName || project.name}
            </NavTopicLink>
          ))}
        {/* 👇🏻 ABOUT LINKS */}
        {section === sectionType.abouts &&
          !isBurgerMenuActive &&
          aboutData.map((about) => (
            <NavTopicLink className="nav-btn" key={about.id} topic={about}>
              {about.navName || about.name}
            </NavTopicLink>
          ))}
      </div>
    </section>
  );
}
