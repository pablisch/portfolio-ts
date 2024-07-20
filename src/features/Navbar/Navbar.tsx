// import React from 'react';
import { useSectionContext } from "../../Hooks/useSectionContext.tsx";

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export default function Navbar({ theme, setTheme }: NavbarProps) {
  const { section } = useSectionContext();

  const handleThemeClick = () => {
    if (theme === "normal") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("normal");
    }
  };

  return (
    <div>
      navbar
      <div>{section}</div>
      <button onClick={handleThemeClick}>
        {theme === "normal" ? "normal" : theme === "dark" ? "dark" : "light"}
      </button>
    </div>
  );
}
