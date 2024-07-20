// import React from "react";
import { extNavLinkObject } from "../../types/data.types";
import "./Navbar.css";

interface extNavLinkProps {
  extLink: extNavLinkObject;
  key?: string;
}

function ExtNavLink({ extLink }: extNavLinkProps) {
  // 👇🏻 TEMPORARY variables to mimic future functionality
  const linkContext = "normal";
  const isAvatarHovered = false;

  const navClasses = extLink.classNames.join(" ");
  const burgerClasses = extLink.burgerClassNames.join(" ");

  const linkClassNames = linkContext === "normal" ? navClasses : burgerClasses;

  return (
    <a
      href={extLink.linkUrl}
      id={`${extLink.name}-nav-btn`}
      className={`${linkClassNames} ${isAvatarHovered ? extLink.avatarClassName : ""}`}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={`/images/${extLink.image.src}`}
        alt={extLink.image.alt}
        id={extLink.image.id}
        className={`${extLink.image.className} ${
          isAvatarHovered ? extLink.image.avatarClassName : ""
        }`}
      />
    </a>
  );
}

export default ExtNavLink;
