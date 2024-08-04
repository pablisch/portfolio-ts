import { createContext, useEffect, useState } from "react";

const coreThemeStyles = ["Light", "Dark", "Colour"];

export interface ThemeContextType {
  theme: string;
  handleThemeChange: () => void;
  isIconRotating: boolean;
  handleAvatarHoverStart: () => void;
  handleAvatarHoverEnd: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: coreThemeStyles[0],
  handleThemeChange: () => {},
  isIconRotating: false,
  handleAvatarHoverStart: () => {},
  handleAvatarHoverEnd: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [coreTheme, setCoreTheme] = useState<string>(coreThemeStyles[0]);
  const [theme, setTheme] = useState<string>(coreTheme);
  const [isAvatarHovered, setIsAvatarHovered] = useState<boolean>(false);
  const [isIconRotating, setIsIconRotating] = useState<boolean>(false);

  const handleAvatarHoverStart = () => {
    setIsAvatarHovered(true);
  };

  const handleAvatarHoverEnd = () => {
    setIsAvatarHovered(false);
  };

  const handleThemeChange = () => {
    const themeIndex = coreThemeStyles.indexOf(theme);
    const newThemeIndex =
      themeIndex === coreThemeStyles.length - 1 ? 0 : themeIndex + 1;
    setCoreTheme(coreThemeStyles[newThemeIndex]);
    setIsIconRotating(true);
    setTimeout(() => {
      setIsIconRotating(false);
    }, 500);
  };

  useEffect(() => {
    if (isAvatarHovered) {
      setTheme("Light");
    } else {
      setTheme(coreTheme);
    }
  }, [isAvatarHovered, coreTheme]);

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
