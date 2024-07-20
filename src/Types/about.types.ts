import { ReactNode } from "react";

export interface AboutObject {
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
