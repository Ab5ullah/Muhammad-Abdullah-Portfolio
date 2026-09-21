import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const dynamic = "force-static";
export const alt = `${profile.name} — ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a1929",
          backgroundImage:
            "linear-gradient(rgba(127,179,217,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(127,179,217,0.16) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 14,
              height: 14,
              border: "2px solid #ff6a45",
              borderRadius: 2,
            }}
          />
          <span style={{ color: "#8da9c4", fontSize: 28 }}>{profile.location}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ color: "#e8f1f8", fontSize: 68, fontWeight: 600, lineHeight: 1.1 }}>
            {profile.name}
          </span>
          <span style={{ color: "#ff6a45", fontSize: 34, fontWeight: 500 }}>
            {profile.headline}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
