import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0b0d",
          color: "#f2efe8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: 24,
        }}
      >
        <div
          style={{
            fontWeight: 900,
            fontStyle: "italic",
            fontSize: 88,
            color: "#e84a38",
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          FL
        </div>
        <div
          style={{
            fontSize: 14,
            letterSpacing: 4,
            color: "#9a9a9f",
            marginTop: 12,
            textTransform: "uppercase",
          }}
        >
          Detailing
        </div>
      </div>
    ),
    size,
  );
}
