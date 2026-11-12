import { ImageResponse } from "next/og";

export const alt = "Code Crew — Digital and Technology Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px",
          background: "#101112",
          color: "#f0efe9",
          border: "12px solid #c5a477",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#c5a477", letterSpacing: 8 }}>
          DIGITAL ENGINEERING STUDIO
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -5 }}>
            CODE CREW
          </div>
          <div style={{ fontSize: 34, color: "#c5a477" }}>
            Ideas into digital experiences.
          </div>
          <div style={{ fontSize: 23, color: "#b6b5ae" }}>
            Websites · Applications · Software · Technology
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 23, color: "#b6b5ae" }}>
          Nairobi, Kenya · Working remotely
        </div>
      </div>
    ),
    { ...size }
  );
}
