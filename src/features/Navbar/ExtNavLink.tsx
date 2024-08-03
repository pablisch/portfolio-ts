// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import { extNavLinkObject } from "../../types/data.types";
import "./Navbar.css";
import { useScreenWidthContext } from "../../hooks/useScreenWidthContext.tsx";

interface extNavLinkProps {
  extLink: extNavLinkObject;
  key: string;
}

function ExtNavLink({ extLink }: extNavLinkProps) {
  const { burgerMenuStage } = useScreenWidthContext();

  const navClasses = extLink.classNames.join(" ");
  const burgerClasses = extLink.burgerClassNames.join(" ");

  return (
    <a
      href={extLink.linkUrl}
      data-test={`${extLink.name}-nav-btn`}
      className={burgerMenuStage > 1 ? burgerClasses : navClasses}
      target="_blank"
      rel="noreferrer"
    >
      <img
        role="image"
        src={`/images/${extLink.image.src}`}
        alt={extLink.image.alt}
        data-test={`${extLink.name}-logo`}
        className={`${extLink.name}-logo`}
      />
    </a>
  );
}

export default ExtNavLink;
