import { ImageResponse } from "next/og";

export const alt = "Swaparup Mukherjee, Backend & Web3 Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#05050f", color: "#f8fafc", border: "12px solid #00e5ff" }}>
        <div style={{ fontSize: 80, fontWeight: 900, background: "linear-gradient(90deg, #93c5fd, #e879f9, #5eead4)", backgroundClip: "text", color: "transparent" }}>
          SWAPARUP MUKHERJEE
        </div>
        <div style={{ fontSize: 40, marginTop: 24 }}>Backend × Web3 × Full-Stack</div>
        <div style={{ fontSize: 28, marginTop: 32, background: "#ff00b3", padding: "8px 20px" }}>GSoC 2026 · BRL-CAD</div>
      </div>
    ),
    size,
  );
}
