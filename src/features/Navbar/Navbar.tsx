import { extNavLinkObject } from "../../types/data.types";
import ExtNavLink from "./ExtNavLink.tsx";
import { extLinkData } from "../../data/extLinkData.tsx";
import { useScreenWidthContext } from "../../hooks/useScreenWidthContext.tsx";
import { useThemeContext } from "../../hooks/useThemeContext.tsx";
import NavLeft from "./NavLeft.tsx";

export default function Navbar() {
  const { theme, handleThemeChange } = useThemeContext();
  const { burgerMenuStage } = useScreenWidthContext();

  // 👇🏻 TEMPORARY variable to mimic future functionality

  return (
    <nav>
      <div className="nav-container">
        <button onClick={handleThemeChange}>
          {theme === "light" ? "light" : theme === "dark" ? "dark" : "colour"}
        </button>
        <NavLeft />
        {/* 👇🏻 EXTERNAL LINK BUTTONS */}
        {extLinkData.length &&
          burgerMenuStage < 2 &&
          extLinkData.map((exLink: extNavLinkObject) => (
            <ExtNavLink key={exLink.name} extLink={exLink} />
          ))}
      </div>
    </nav>
  );
}
