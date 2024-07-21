import { useContext } from "react";
import {
  ScreenWidthContext,
  ScreenWidthContextType,
} from "../context/ScreenWidthContext";

export const useScreenWidthContext: () => ScreenWidthContextType = () => {
  const context = useContext(ScreenWidthContext);
  if (!context) {
    throw new Error(
      "useScreenWidthContext must be used within a ScreenWidthProvider",
    );
  }
  return context;
};
