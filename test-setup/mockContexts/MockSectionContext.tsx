// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, { ReactNode } from "react";
import { FocusTopicContext } from "../../src/context/FocusTopicContext";
import {
  aboutObject,
  projectObject,
  sectionType,
} from "../../src/types/data.types";

interface MockSectionContextProps {
  children: ReactNode;
  section: sectionType;
  toggleSection: () => void;
  handleSectionChange: (section: sectionType) => void;
  hoveredTopicId: string;
  setHoveredTopicId: (topicId: string) => void;
  selectedTopicId: string;
  setSelectedTopicId: (topicId: string) => void;
  handleSetHoveredTopic: (topicId: string) => void;
  handleUnsetHoveredTopic: () => void;
  handleSelectTopicId: (topicId: string) => void;
}

const MockSectionContext: React.FC<MockSectionContextProps> = ({
  children,
  section = sectionType.projects,
  handleSectionChange = () => {},
  focusProjectId = "",
  setFocusProjectId = () => {},
  focusAboutId = "",
  setFocusAboutId = () => {},
  selectedProject = null,
  setSelectedProject = () => {},
  selectedAbout = null,
  setSelectedAbout = () => {},
}) => {
  return (
    <FocusTopicContext.Provider
      value={{
        section,
        handleSectionChange,
        focusProjectId,
        setFocusProjectId,
        focusAboutId,
        setFocusAboutId,
        selectedProject,
        setSelectedProject,
        selectedAbout,
        setSelectedAbout,
      }}
    >
      {children}
    </FocusTopicContext.Provider>
  );
};

export default MockSectionContext;
