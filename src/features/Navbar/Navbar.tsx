import NavLeft from "./NavLeft.tsx";
import NavRight from "./NavRight.tsx";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <NavLeft />
        <NavRight />
      </div>
      <div className={`nav-border-bar-1`}></div>
      <div className={`nav-border-bar-2`}></div>
      <div className={`nav-border-bar-3`}></div>
    </nav>
  );
}
