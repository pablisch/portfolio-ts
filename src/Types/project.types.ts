import { ReactNode } from 'react';

export interface ProjectObject {
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
    techBadgesArray: [
        { scale: string },
        { src: string; alt: string; class?: string }[]
    ];
}
