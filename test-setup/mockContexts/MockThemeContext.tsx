// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, { ReactNode } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
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
    // @ts-expect-error TS17004
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
