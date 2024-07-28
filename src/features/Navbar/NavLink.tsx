import React from "react";
import { aboutObject, projectObject } from "../../types/data.types.ts";
import { useSectionContext } from "../../hooks/useSectionContext.tsx";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../helpers/pageHelpers.ts";

interface NavLinkProps {
  children: React.ReactNode;
  topic: projectObject | aboutObject;
  className?: string;
}

function NavLink({
  children,
  topic,
  className = "nav-btn nav-link",
}: NavLinkProps) {
  const {
    section,
    setFocusProjectId,
    setSelectedProject,
    setFocusAboutId,
    setSelectedAbout,
  } = useSectionContext();

  const navigate = useNavigate();

  const handleHoverStart = () => {
    if (section === "projects") setFocusProjectId(topic.id);
    if (section === "about") setFocusAboutId(topic.id);
  };

  const handleHoverEnd = () => {
    if (section === "projects") setFocusProjectId("");
    if (section === "about") setFocusAboutId("");
  };

  const handleClick = (topic: projectObject | aboutObject) => {
    if (section === "projects" && topic.id)
      setSelectedProject(topic as projectObject);
    if (section === "about" && topic.id) setSelectedAbout(topic as aboutObject);
    localStorage.setItem("selectedTopic", JSON.stringify(topic));
    navigate(
      `/${Number(topic.id) < 10 ? "project" : "more-about-me"}/${topic.id}`,
    );
    scrollToTop();
  };

  return (
    <div
      role="button"
      data-test={`${topic.identifier}-nav-btn`}
      className={className}
      onClick={() => handleClick(topic)}
      onMouseOver={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {children}
    </div>
  );
}

export default NavLink;
