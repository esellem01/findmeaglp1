import { ImageResponse } from "next/og";

export const alt = "FindMeAGLP1 — Find the right GLP-1 for your situation";
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
          justifyContent: "center",
          padding: "80px",
          backgroundImage:
            "linear-gradient(135deg, #ccfbf1 0%, #e0f2fe 55%, #f0fdfa 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 44,
              backgroundImage: "linear-gradient(135deg, #2dd4bf, #0ea5e9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 56,
              fontWeight: 800,
              boxShadow: "0 10px 30px rgba(20, 184, 166, 0.3)",
            }}
          >
            F
          </div>
          <div
            style={{
              fontSize: 46,
              fontWeight: 700,
              color: "#0f766e",
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            FindMeAGLP1
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            fontSize: 92,
            fontWeight: 800,
            color: "#134e4a",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 1040,
            display: "flex",
          }}
        >
          Find the right GLP-1 for your situation
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 32,
            color: "#0f766e",
            maxWidth: 1000,
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          Free 60-second quiz. Insurance, self-pay, Medicare. Cheapest options first.
        </div>
      </div>
    ),
    { ...size }
  );
}
