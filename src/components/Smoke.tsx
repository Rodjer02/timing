import type { CSSProperties } from "react";

export type Puff = CSSProperties;

/** Слой «дыма» — размытые красные пятна. */
export function Smoke({ puffs, roam = false, style }: { puffs: Puff[]; roam?: boolean; style?: CSSProperties }) {
  return (
    <div className="smoke" aria-hidden="true" style={style}>
      {puffs.map((p, i) => (
        <span key={i} className={`puff ${roam ? "roam" : ""}`} style={p} />
      ))}
    </div>
  );
}

/** Фоновый дым на всю страницу. */
export const PAGE_SMOKE: Puff[] = [
  { top: "2%", left: "-12%", width: 700, height: 560, background: "#B3121F", animationDuration: "15s", animationDelay: "-2s" },
  { top: "10%", right: "-14%", width: 640, height: 600, background: "#8A0E19", animationDuration: "18s", animationDelay: "-9s" },
  { top: "20%", left: "30%", width: 520, height: 440, background: "#D4142A", opacity: 0.35, animationDuration: "14s", animationDelay: "-5s" },
  { top: "30%", left: "-16%", width: 660, height: 580, background: "#7A0A14", animationDuration: "17s", animationDelay: "-12s" },
  { top: "39%", right: "-10%", width: 600, height: 520, background: "#B3121F", animationDuration: "13s", animationDelay: "-3s" },
  { top: "48%", left: "35%", width: 560, height: 480, background: "#8A0E19", opacity: 0.4, animationDuration: "19s", animationDelay: "-7s" },
  { top: "57%", left: "-12%", width: 640, height: 560, background: "#C8102E", animationDuration: "16s", animationDelay: "-10s" },
  { top: "66%", right: "-14%", width: 700, height: 600, background: "#7A0A14", animationDuration: "15s", animationDelay: "-1s" },
  { top: "75%", left: "25%", width: 520, height: 460, background: "#B3121F", opacity: 0.4, animationDuration: "18s", animationDelay: "-14s" },
  { top: "84%", left: "-10%", width: 620, height: 540, background: "#8A0E19", animationDuration: "14s", animationDelay: "-6s" },
  { top: "90%", right: "-12%", width: 600, height: 520, background: "#D4142A", opacity: 0.4, animationDuration: "17s", animationDelay: "-4s" },
];
