import { createContext, useState } from "react";

const themeStyles = ["colour", "light", "dark"];

export interface ThemeContextType {
  theme: string;
  handleThemeChange: () => void;
  isIconRotating: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "colour",
  handleThemeChange: () => {},
  isIconRotating: false,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");
  const [isIconRotating, setIsIconRotating] = useState<boolean>(false);

  const handleThemeChange = () => {
    const themeIndex = themeStyles.indexOf(theme);
    const newThemeIndex =
      themeIndex === themeStyles.length - 1 ? 0 : themeIndex + 1;
    setTheme(themeStyles[newThemeIndex]);
    setIsIconRotating(true);
    setTimeout(() => {
      setIsIconRotating(false);
    }, 500);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange, isIconRotating }}>
      {children}
    </ThemeContext.Provider>
  );
};
