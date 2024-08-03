import React, { createContext, useState } from "react";
import { aboutObject, projectObject } from "../types/data.types";

export interface SectionContextType {
  section: string;
  handleSectionChange: () => void;
  focusProjectId: string;
  setFocusProjectId: (projectId: string) => void;
  selectedProject: projectObject | null;
  setSelectedProject: (project: projectObject | null) => void;
  focusAboutId: string;
  setFocusAboutId: (aboutId: string) => void;
  selectedAbout: aboutObject | null;
  setSelectedAbout: (about: aboutObject | null) => void;
}

export const SectionContext = createContext<SectionContextType>({
  section: "projects",
  handleSectionChange: () => {},
  focusProjectId: "",
  setFocusProjectId: () => {},
  selectedProject: null,
  setSelectedProject: () => {},
  focusAboutId: "",
  setFocusAboutId: () => {},
  selectedAbout: null,
  setSelectedAbout: () => {},
});

export const SectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [section, setSection] = useState<string>("projects");
  const [focusProjectId, setFocusProjectId] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<projectObject | null>(
    null,
  );
  const [focusAboutId, setFocusAboutId] = useState<string>("");
  const [selectedAbout, setSelectedAbout] = useState<aboutObject | null>(null);

  const handleSectionChange = () => {
    const newSection = section === "projects" ? "about" : "projects";
    setSection(newSection);
  };

  return (
    <SectionContext.Provider
      value={{
        section,
        handleSectionChange,
        focusProjectId,
        setFocusProjectId,
        selectedProject,
        setSelectedProject,
        focusAboutId,
        setFocusAboutId,
        selectedAbout,
        setSelectedAbout,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};
