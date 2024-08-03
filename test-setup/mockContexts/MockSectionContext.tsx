import React, { ReactNode } from "react";
import { SectionContext } from "../../src/context/SectionContext";
import { aboutObject, projectObject } from "../../src/types/data.types";

interface MockSectionContextProps {
  children: ReactNode;
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

const MockSectionContext: React.FC<MockSectionContextProps> = ({
  children,
  section = "projects",
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
    <SectionContext.Provider
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
    </SectionContext.Provider>
  );
};

export default MockSectionContext;
