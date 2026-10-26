import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070304",
        }}
      >
        <svg width="140" height="140" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="22" r="13" stroke="#FF2A3D" strokeWidth="3" />
          <path d="M16 4h8M20 4v5M31 9l2.5-2.5" stroke="#FF2A3D" strokeWidth="3" strokeLinecap="round" />
          <path d="M20 22V14" stroke="#FFE4E6" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="20" cy="22" r="2.4" fill="#FFE4E6" />
        </svg>
      </div>
    ),
    size,
  );
}
