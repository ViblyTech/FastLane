import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = "Fast Lane Detailing, Mobile Auto Detailing in Bend, OR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0d",
          color: "#f2efe8",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#9a9a9f",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div style={{ width: 48, height: 1, background: "#9a9a9f" }} />
            Bend, Oregon · Est. 2024
          </div>
          <div
            style={{
              fontStyle: "italic",
              fontWeight: 800,
              fontSize: 40,
              letterSpacing: -1,
            }}
          >
            Fast Lane
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 108,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: -4,
              maxWidth: 1000,
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <span>Detailing that</span>
            <span style={{ color: "#e84a38" }}>comes to you.</span>
          </div>
          <div style={{ fontSize: 32, color: "#9a9a9f", maxWidth: 900 }}>
            Mobile auto detailing, ceramic coating, and paint correction. Bend and Central Oregon.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#9a9a9f",
            borderTop: "1px solid #26262b",
            paddingTop: 24,
          }}
        >
          <span>{site.phone} · call or text</span>
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    size,
  );
}
