import { useContext } from "react";
import {
  FocusTopicContext,
  SectionContextType,
} from "../context/FocusTopicContext.tsx";

export const useFocusTopicContext: () => SectionContextType = () => {
  const context = useContext(FocusTopicContext);
  if (!context) {
    throw new Error(
      "useFocusTopicContext must be used within a FocusTopicProvider",
    );
  }
  return context;
};
