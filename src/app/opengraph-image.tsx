import { ImageResponse } from "next/og";
import { MIN_HOUR, MIN_NIGHT, ROOMS } from "@/data/content";
import { site } from "@/data/site";
import { tenge } from "@/lib/format";

export const alt = `${site.name} — компьютерный клуб в Астане`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** TTF с Google Fonts только для нужных символов; без сети — системный шрифт. */
async function loadGoogleFont(family: string, weight: number, text: string): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (!match) return null;
    const res = await fetch(match[1]);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const badge = "Единственная киберстанция Scorpion в Астане";
  const sub = `${ROOMS.length} игровых зон · ${site.address}`;
  const price = `Час от ${tenge(MIN_HOUR)} · ночь от ${tenge(MIN_NIGHT)}`;

  const [display, sans] = await Promise.all([
    loadGoogleFont("Tektur", 900, "TIMINGCYBERCLUB" + price + "БРОНЬВWHATSAPP"),
    loadGoogleFont("Exo 2", 600, badge + sub + site.phone),
  ]);

  const fonts: NonNullable<ConstructorParameters<typeof ImageResponse>[1]>["fonts"] = [];
  if (display) fonts.push({ name: "Tektur", data: display, weight: 900, style: "normal" });
  if (sans) fonts.push({ name: "Exo 2", data: sans, weight: 600, style: "normal" });
  const D = display ? "Tektur" : "sans-serif";
  const S = sans ? "Exo 2" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#070304",
          color: "#F5E9EA",
          fontFamily: S,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -220,
            top: -240,
            width: 760,
            height: 760,
            borderRadius: 9999,
            background: "radial-gradient(circle at center, rgba(179,18,31,0.6) 0%, rgba(179,18,31,0.22) 40%, rgba(7,3,4,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -200,
            bottom: -260,
            width: 720,
            height: 720,
            borderRadius: 9999,
            background: "radial-gradient(circle at center, rgba(212,20,42,0.5) 0%, rgba(138,14,25,0.2) 40%, rgba(7,3,4,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 70,
            top: 120,
            width: 330,
            height: 330,
            borderRadius: 9999,
            border: "16px solid #FF2A3D",
            boxShadow: "0 0 40px rgba(255,42,61,0.7)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
            padding: "10px 18px",
            borderRadius: 999,
            border: "1px solid rgba(255,59,74,0.5)",
            background: "rgba(30,8,11,0.7)",
            fontSize: 22,
            color: "#FFC2C7",
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#FF2A3D", marginRight: 12 }} />
          {badge}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: D,
              fontSize: 190,
              lineHeight: 0.9,
              color: "#FFE4E6",
              textShadow: "0 0 30px rgba(230,20,40,0.9)",
            }}
          >
            TIMING
          </div>
          <div style={{ fontFamily: D, fontSize: 52, letterSpacing: 16, color: "#FF3B4A", marginTop: 6 }}>CYBER CLUB</div>
          <div style={{ fontSize: 30, color: "#D9C3C5", marginTop: 18 }}>{sub}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 26 }}>
          <div style={{ display: "flex", padding: "14px 26px", background: "#E11D2E", color: "#fff", borderRadius: 16, fontFamily: D }}>
            {price}
          </div>
          <div style={{ display: "flex", color: "#B89A9D" }}>{site.phone}</div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
