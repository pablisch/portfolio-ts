import { ReactNode } from "react";

export interface projectObject {
  id: string;
  identifier: string;
  name: string;
  navName: string;
  panelName: string;
  image: string;
  appUrl: string;
  apiWakeUpUrl: string | null;
  repoUrl: string;
  summary: string;
  responsivenessText: string;
  heading: string;
  subheading: string;
  descriptionText: ReactNode;
  technologiesText: ReactNode;
  techBadges: [
    { scale: string },
    { src: string; alt: string; class?: string }[],
  ];
}

export interface aboutObject {
  id: string;
  identifier: string;
  name: string;
  navName: string;
  panelName: string;
  image: string;
  appUrl: string;
  iframeWidth: string;
  iframeHeight: string;
  summary: string;
  heading: string;
  subheading: string;
  descriptionText1: ReactNode;
  descriptionText2: ReactNode;
}

interface extNavLinkImage {
  src: string;
  alt: string;
  id: string;
  className: string;
  avatarClassName: string;
}

export interface extNavLinkObject {
  name: string;
  linkUrl: string;
  classNames: string[];
  burgerClassNames: string[];
  avatarClassName: string;
  image: extNavLinkImage;
}
