import type { IconTypes } from "solid-icons";
import { FiFilm, FiMessageSquare, FiTerminal, FiUser } from "solid-icons/fi";

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
    description: "Displays a new random quote each day.",
    url: "https://quotes.phons.dev",
    icon: FiMessageSquare,
  },
  {
    name: "Battleships",
    description:
      "Battleships played in your terminal over SSH, against a bot or a friend with a room code.",
    url: "https://battleships.phons.dev",
    icon: FiTerminal,
  },
  {
    name: "Portfolio",
    description: "CV, experience, and project write-ups.",
    url: "https://portfolio.phons.dev",
    icon: FiUser,
  },
];
