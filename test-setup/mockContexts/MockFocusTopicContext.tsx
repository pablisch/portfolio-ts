// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, { ReactNode } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { FocusTopicContext } from "../../src/context/FocusTopicContext";
import { sectionType } from "../../src/types/data.types";

interface MockSectionContextProps {
  children: ReactNode;
  section: sectionType;
  toggleSection: () => void;
  handleSectionChange: (section: sectionType) => void;
  hoveredTopicId: string;
  handleSetHoveredTopic: (topicId: string) => void;
  handleUnsetHoveredTopic: () => void;
  selectedTopicId: string;
  handleSelectTopicId: (topicId: string) => void;
}

const MockFocusTopicContext: React.FC<MockSectionContextProps> = ({
  children,
  section = sectionType.projects,
  toggleSection = () => {},
  handleSectionChange = () => {},
  hoveredTopicId = "",
  handleSetHoveredTopic = () => {},
  handleUnsetHoveredTopic = () => {},
  selectedTopicId = "",
  handleSelectTopicId = () => {},
}) => {
  return (
    // @ts-expect-error TS17004
    <FocusTopicContext.Provider
      value={{
        section,
        toggleSection,
        handleSectionChange,
        hoveredTopicId,
        handleSetHoveredTopic,
        handleUnsetHoveredTopic,
        selectedTopicId,
        handleSelectTopicId,
      }}
    >
      {children}
    </FocusTopicContext.Provider>
  );
};

export default MockFocusTopicContext;
