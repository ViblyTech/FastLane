import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0b0d",
          color: "#e84a38",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontWeight: 900,
          fontStyle: "italic",
          fontSize: 42,
          letterSpacing: -2,
          borderRadius: 12,
        }}
      >
        FL
      </div>
    ),
    size,
  );
}
