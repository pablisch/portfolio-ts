import React, { createContext, useState } from "react";
import { aboutObject, projectObject } from "../types/data.types";
import projectData from "../data/projectData.tsx";
import aboutData from "../data/aboutData.tsx";

// TODO below only to force focus Id to be "1" for setting CSS with fake hovered topic
let forceId1Focus;
forceId1Focus = false;
forceId1Focus = true;
forceId1Focus = false;

export interface SectionContextType {
  section: string;
  handleSectionChange: () => void;
  hoveredTopicId: string;
  setHoveredTopicId: (projectId: string) => void;
  selectedTopic: projectObject | aboutObject | null;
  setSelectedTopic: (topic: projectObject | aboutObject | null) => void;
  handleSetFocusTopic: (index: number, id: string) => void;
  handleUnsetFocusTopic: () => void;
  handleSelectTopic: (topicId: string, section: string) => void;
}

export const FocusTopicContext = createContext<SectionContextType>({
  section: "projects",
  handleSectionChange: () => {},
  hoveredTopicId: "",
  setHoveredTopicId: () => {},
  selectedTopic: null,
  setSelectedTopic: () => {},
  handleSetFocusTopic: () => {},
  handleUnsetFocusTopic: () => {},
  handleSelectTopic: () => {},
});

export const FocusTopicProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [section, setSection] = useState<string>("projects");
  const [hoveredTopicId, setHoveredTopicId] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<
    projectObject | aboutObject | null
  >(null);

  const handleSectionChange = () => {
    const newSection = section === "projects" ? "about" : "projects";
    setSection(newSection);
  };

  const handleSetFocusTopic = (index: number, id: string) => {
    setHoveredTopicId(id);

    // TODO below only to force focus Id to be "1" for setting CSS with fake hovered topic
    if (forceId1Focus) setHoveredTopicId("1");
  };

  const handleUnsetFocusTopic = () => {
    setHoveredTopicId("");

    // TODO below only to force focus Id to be "1" for setting CSS with fake hovered topic
    if (forceId1Focus) setHoveredTopicId("1");
  };

  const handleSelectTopic = (topicId: string, section: string) => {
    let topic: projectObject | aboutObject | null = null;
    if (section === "project") {
      topic = projectData.find((project) => project.id === topicId) || null;
    } else if (section === "about") {
      topic = aboutData.find((about) => about.id === topicId) || null;
    }
    setSelectedTopic(topic);
    console.log("Selected topic:", topic?.name);
  };

  return (
    <FocusTopicContext.Provider
      value={{
        section,
        handleSectionChange,
        hoveredTopicId,
        setHoveredTopicId,
        selectedTopic,
        setSelectedTopic,
        handleSetFocusTopic,
        handleUnsetFocusTopic,
        handleSelectTopic,
      }}
    >
      {children}
    </FocusTopicContext.Provider>
  );
};
