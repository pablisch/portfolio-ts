import React, { createContext, useState } from "react";
import { aboutObject, projectObject } from "../types/data.types";
import projectData from "../data/projectData.tsx";
import aboutData from "../data/aboutData.tsx";

export interface SectionContextType {
  // focusProjectId: string;
  // setFocusProjectId: (projectId: string) => void;
  // selectedProject: projectObject | null;
  // setSelectedProject: (project: projectObject | null) => void;
  // focusAboutId: string;
  // setFocusAboutId: (aboutId: string) => void;
  // selectedAbout: aboutObject | null;
  // setSelectedAbout: (about: aboutObject | null) => void;
  section: string;
  handleSectionChange: () => void;
  focusTopicId: string;
  setFocusTopicId: (projectId: string) => void;
  selectedTopic: projectObject | aboutObject | null;
  setSelectedTopic: (topic: projectObject | aboutObject | null) => void;
  handleSetHoveredRow: (index: number) => void;
  handleUnsetHoveredRow: () => void;
  hoveredRow: number | null;
  hoveredColumn: number | null;
  handleSetFocusTopic: (index: number, id: string) => void;
  handleUnsetFocusTopic: () => void;
  handleSelectTopic: (topicId: string, section: string) => void;
}

export const FocusTopicContext = createContext<SectionContextType>({
  // focusProjectId: "",
  // setFocusProjectId: () => {},
  // selectedProject: null,
  // setSelectedProject: () => {},
  // focusAboutId: "",
  // setFocusAboutId: () => {},
  // selectedAbout: null,
  // setSelectedAbout: () => {},
  section: "projects",
  handleSectionChange: () => {},
  focusTopicId: "",
  setFocusTopicId: () => {},
  selectedTopic: null,
  setSelectedTopic: () => {},
  handleSetHoveredRow: () => {},
  handleUnsetHoveredRow: () => {},
  hoveredRow: null,
  hoveredColumn: null,
  handleSetFocusTopic: () => {},
  handleUnsetFocusTopic: () => {},
  handleSelectTopic: () => {},
});

export const SectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [section, setSection] = useState<string>("projects");
  // const [focusProjectId, setFocusProjectId] = useState<string>("");
  // const [selectedProject, setSelectedProject] = useState<projectObject | null>(
  //   null,
  // );
  // const [focusAboutId, setFocusAboutId] = useState<string>("");
  // const [selectedAbout, setSelectedAbout] = useState<aboutObject | null>(null);
  const [focusTopicId, setFocusTopicId] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<
    projectObject | aboutObject | null
  >(null);

  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  const handleSetHoveredRow = (index: number) => {
    setHoveredRow(index);
  };

  const handleUnsetHoveredRow = () => {
    setHoveredRow(null);
  };

  const handleSectionChange = () => {
    const newSection = section === "projects" ? "about" : "projects";
    setSection(newSection);
  };

  const handleSetFocusTopic = (index: number, id: string) => {
    setHoveredColumn(index);
    setFocusTopicId(id);
  };

  const handleUnsetFocusTopic = () => {
    setHoveredColumn(null);
    setFocusTopicId("");
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
        // focusProjectId,
        // setFocusProjectId,
        // selectedProject,
        // setSelectedProject,
        // focusAboutId,
        // setFocusAboutId,
        // selectedAbout,
        // setSelectedAbout,
        focusTopicId,
        setFocusTopicId,
        selectedTopic,
        setSelectedTopic,
        handleSetHoveredRow,
        handleUnsetHoveredRow,
        hoveredRow,
        hoveredColumn,
        handleSetFocusTopic,
        handleUnsetFocusTopic,
        handleSelectTopic,
      }}
    >
      {children}
    </FocusTopicContext.Provider>
  );
};
