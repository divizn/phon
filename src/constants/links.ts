import type { IconTypes } from "solid-icons";
import { FiFilm, FiMessageSquare, FiCloud, FiUser } from "solid-icons/fi";

export type HubLink = {
  name: string;
  description: string;
  url: string;
  icon: IconTypes;
};

// Add a new live project here to have it show up on the hub — no other file
// needs to change.
export const links: HubLink[] = [
  {
    name: "vidm",
    description:
      "Browser-based tool that reformats landscape video into captioned short-form portrait video, entirely client-side.",
    url: "https://vidm.phons.dev",
    icon: FiFilm,
  },
  {
    name: "Quotes",
    description: "Quote app.",
    url: "https://quotes.phons.dev",
    icon: FiMessageSquare,
  },
  {
    name: "Weather",
    description: "Weather app.",
    url: "https://weather.phons.dev",
    icon: FiCloud,
  },
  {
    name: "Portfolio",
    description: "CV, experience, and project write-ups.",
    url: "https://portfolio.phons.dev",
    icon: FiUser,
  },
];
