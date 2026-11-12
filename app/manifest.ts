import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Code Crew",
    short_name: "Code Crew",
    description: "Digital and technology solutions by Code Crew.",
    start_url: "/",
    display: "standalone",
    background_color: "#101112",
    theme_color: "#101112",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
