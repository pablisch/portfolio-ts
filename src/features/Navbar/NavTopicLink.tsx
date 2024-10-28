import React from "react";
import { aboutObject, projectObject } from "../../types/data.types.ts";
import { useFocusTopicContext } from "../../hooks/useFocusTopicContext.tsx";
// import { useNavigate } from "react-router-dom";
// import { scrollToTop } from "../../helpers/pageHelpers.ts";

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
  const {
    handleSetHoveredTopic,
    handleUnsetHoveredTopic,
    handleSelectedTopicId,
  } = useFocusTopicContext();

  return (
    <div
      role="button"
      data-test={`${topic.identifier}-nav-btn`}
      className={className}
      onClick={() => handleSelectedTopicId(topic.id)}
      onMouseOver={() => handleSetHoveredTopic(topic.id)}
      onMouseLeave={handleUnsetHoveredTopic}
    >
      {children}
    </div>
  );
}

export default NavTopicLink;
