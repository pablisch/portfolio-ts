import React from "react";
import { aboutObject, projectObject } from "../../types/data.types.ts";
import { useFocusTopicContext } from "../../hooks/useFocusTopicContext.tsx";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../helpers/pageHelpers.ts";

interface NavLinkProps {
  children: React.ReactNode;
  topic: projectObject | aboutObject;
  className?: string;
}

function NavTopicLink({
  children,
  topic,
  className = "nav-btn",
}: NavLinkProps) {
  const { section, setHoveredTopicId, setSelectedTopic } =
    useFocusTopicContext();

  const navigate = useNavigate();

  const handleHoverStart = () => {
    setHoveredTopicId(topic.id);
  };

  const handleHoverEnd = () => {
    setHoveredTopicId("");
  };

  const handleClick = (topic: projectObject | aboutObject) => {
    if (section === "projects" && topic.id)
      setSelectedTopic(topic as projectObject);
    if (section === "about" && topic.id) setSelectedTopic(topic as aboutObject);
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

export default NavTopicLink;