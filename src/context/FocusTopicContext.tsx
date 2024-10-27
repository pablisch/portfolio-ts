import React, { createContext, useState } from "react";
import { sectionType } from "../types/data.types.ts";

// TODO below only to force focus Id to be "1" for setting CSS with fake hovered topic
let forceId1Focus;
forceId1Focus = false;
forceId1Focus = true;
forceId1Focus = false;

export interface SectionContextType {
  section: sectionType;
  toggleSection: () => void;
  handleSectionChange: (newSection: sectionType) => void;
  hoveredTopicId: string;
  setHoveredTopicId: (projectId: string) => void;
  selectedTopicId: string;
  setSelectedTopicId: (topicId: string) => void;
  handleSetHoveredTopic: (id: string) => void;
  handleUnsetHoveredTopic: () => void;
  handleSelectTopicId: (topicId: string) => void;
}

export const FocusTopicContext = createContext<SectionContextType>({
  section: sectionType.projects,
  toggleSection: () => {},
  handleSectionChange: () => {},
  hoveredTopicId: "",
  setHoveredTopicId: () => {},
  selectedTopicId: "",
  setSelectedTopicId: () => {},
  handleSetHoveredTopic: () => {},
  handleUnsetHoveredTopic: () => {},
  handleSelectTopicId: () => {},
});

export const FocusTopicProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [section, setSection] = useState<sectionType>(sectionType.projects);
  const [hoveredTopicId, setHoveredTopicId] = useState<string>("");
  const [selectedTopicId, setSelectedTopicId] = useState<string>("");

  const toggleSection = () => {
    const newSection =
      section === sectionType.projects
        ? sectionType.abouts
        : sectionType.projects;
    setSection(newSection);
  };

  const handleSectionChange = (newSection: sectionType) => {
    setSection(newSection);
  };

  const handleSetHoveredTopic = (id: string) => {
    setHoveredTopicId(id);
    if (Number(id) < 11) {
      setSection(sectionType.projects);
    } else {
      setSection(sectionType.abouts);
    }

    // TODO below only to force focus Id to be "1" for setting CSS with fake hovered topic
    if (forceId1Focus) setHoveredTopicId("1");
  };

  const handleUnsetHoveredTopic = () => {
    setHoveredTopicId("");

    // TODO below only to force focus Id to be "1" for setting CSS with fake hovered topic
    if (forceId1Focus) setHoveredTopicId("1");
  };

  const handleSelectTopicId = (topicId: string) => {
    setSelectedTopicId(topicId);
    if (Number(topicId) < 11) {
      setSection(sectionType.projects);
    } else {
      setSection(sectionType.abouts);
    }
    console.log(`Topic ID set to ${topicId}`);
  };

  return (
    <FocusTopicContext.Provider
      value={{
        section,
        toggleSection,
        handleSectionChange,
        hoveredTopicId,
        setHoveredTopicId,
        selectedTopicId,
        setSelectedTopicId,
        handleSetHoveredTopic,
        handleUnsetHoveredTopic,
        handleSelectTopicId,
      }}
    >
      {children}
    </FocusTopicContext.Provider>
  );
};
