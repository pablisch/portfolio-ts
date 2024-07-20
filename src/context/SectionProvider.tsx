import React, { createContext, useState } from "react";
import { AboutObject, ProjectObject } from "../Types/data.types";

export interface SectionContextType {
  section: string;
  setSection: (section: string) => void;
  focusProjectId: string;
  setFocusProjectId: (projectId: string) => void;
  selectedProject: ProjectObject | null;
  setSelectedProject: (project: ProjectObject | null) => void;
  focusAboutId: string;
  setFocusAboutId: (aboutId: string) => void;
  selectedAbout: AboutObject | null;
  setSelectedAbout: (about: AboutObject | null) => void;
}

export const SectionContext = createContext<SectionContextType>({
  section: "projects",
  setSection: () => {},
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
  const [selectedProject, setSelectedProject] = useState<ProjectObject | null>(
    null,
  );
  const [focusAboutId, setFocusAboutId] = useState<string>("");
  const [selectedAbout, setSelectedAbout] = useState<AboutObject | null>(null);

  return (
    <SectionContext.Provider
      value={{
        section,
        setSection,
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
