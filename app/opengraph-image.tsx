import { ImageResponse } from "next/og";

export const alt = "FindMeAGLP1 — Find the right GLP-1 for your situation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadJakarta(weight: number): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@${weight}`;
  const css = await fetch(url).then((r) => r.text());
  const match = css.match(/src:\s*url\(([^)]+)\)\s*format\('truetype'\)/);
  if (!match) {
    throw new Error(`Could not extract TTF URL for Plus Jakarta Sans @${weight}`);
  }
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const [regular, bold, extraBold] = await Promise.all([
    loadJakarta(400),
    loadJakarta(700),
    loadJakarta(800),
  ]);

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
          fontFamily: "Plus Jakarta Sans",
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
            fontWeight: 400,
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
    {
      ...size,
      fonts: [
        { name: "Plus Jakarta Sans", data: regular, weight: 400, style: "normal" },
        { name: "Plus Jakarta Sans", data: bold, weight: 700, style: "normal" },
        { name: "Plus Jakarta Sans", data: extraBold, weight: 800, style: "normal" },
      ],
    }
  );
}
