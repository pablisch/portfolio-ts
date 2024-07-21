import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../context/ThemeContext";

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
