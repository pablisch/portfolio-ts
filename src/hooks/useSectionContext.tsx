import { useContext } from "react";
import {
  SectionContext,
  SectionContextType,
} from "../context/SectionProvider.tsx";

export const useSectionContext: () => SectionContextType = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSectionContext must be used within a SectionProvider");
  }
  return context;
};
