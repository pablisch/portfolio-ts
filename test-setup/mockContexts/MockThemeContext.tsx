import React, { ReactNode } from "react";
import { ThemeContext } from "../../src/context/ThemeContext";

interface MockThemeContextProviderProps {
  children: ReactNode;
  theme: string;
  handleThemeChange?: () => void;
  isIconRotating?: boolean;
  handleAvatarHoverStart?: () => void;
  handleAvatarHoverEnd?: () => void;
}

const MockThemeContext: React.FC<MockThemeContextProviderProps> = ({
  children,
  theme = "light",
  handleThemeChange = () => {},
  isIconRotating = false,
  handleAvatarHoverStart = () => {},
  handleAvatarHoverEnd = () => {},
}) => {
  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleThemeChange,
        isIconRotating,
        handleAvatarHoverStart,
        handleAvatarHoverEnd,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default MockThemeContext;
