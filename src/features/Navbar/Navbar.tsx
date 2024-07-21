import { useThemeContext } from "../../hooks/useThemeContext.tsx";
import NavLeft from "./NavLeft.tsx";
import NavRight from "./NavRight.tsx";

export default function Navbar() {
  const { theme, handleThemeChange } = useThemeContext();

  // 👇🏻 TEMPORARY variable to mimic future functionality

  return (
    <nav>
      <div className="nav-container">
        <button onClick={handleThemeChange}>
          {theme === "light" ? "light" : theme === "dark" ? "dark" : "colour"}
        </button>
        <NavLeft />
        <NavRight />
      </div>
      <div className={`nav-border-bar-1 nav-border-bar-1-${theme}`}></div>
      <div className={`nav-border-bar-2 nav-border-bar-2-${theme}`}></div>
      <div className={`nav-border-bar-3 nav-border-bar-3-${theme}`}></div>
    </nav>
  );
}
