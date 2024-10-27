import { ReactNode } from "react";

interface techBadge {
  src: string;
  alt: string;
  className?: string;
}

interface techBadgeObject {
  scale: string;
  badges: techBadge[];
}

export interface projectObject {
  id: string;
  identifier: string;
  name: string;
  navName?: string;
  panelName?: string;
  image: string;
  appUrl: string;
  apiWakeUpUrl?: string | null;
  repoUrl: string;
  summary: string;
  responsivenessText: string;
  heading: string;
  subheading: string;
  descriptionText: ReactNode;
  technologiesText: ReactNode;
  techBadges: techBadgeObject;
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
}

export interface extNavLinkObject {
  name: string;
  linkUrl: string;
  classNames: string[];
  burgerClassNames: string[];
  image: extNavLinkImage;
}

export interface topicDataObject {
  id: string;
  panelName: string;
  summary: string;
  image: string;
  section: sectionType;
}

export enum sectionType {
  projects = "projects",
  abouts = "abouts",
}
