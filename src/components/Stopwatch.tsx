"use client";

import { pad } from "@/lib/format";
import { useAstanaNow } from "@/lib/useAstanaNow";
import styles from "./Hero.module.css";

const R = 180;
const CIRC = 2 * Math.PI * R;

function modeText(h: number, m: number): string {
  if (h >= 22 || h < 8) return "Сейчас действует ночной пакет — до 08:00";
  if (h < 16) return "Сейчас действует дневной пакет — до 16:00";
  const left = 22 * 60 - (h * 60 + m);
  return `До ночного пакета ${Math.floor(left / 60)} ч ${pad(left % 60)} мин`;
}

/** Секундомер с текущим временем Астаны: дуга — прошедшая часть часа, стрелка — секунды. */
export function Stopwatch() {
  const t = useAstanaNow();
  const frac = t ? (t.m * 60 + t.s) / 3600 : 0;
  const secDeg = t ? t.s * 6 : 0;

  return (
    <div className={styles.watch}>
      <svg className={`${styles.watchLayer} spin-rev`} viewBox="0 0 440 440" fill="none" aria-hidden="true">
        <circle cx="220" cy="220" r="214" stroke="#FF2A3D" strokeOpacity=".35" strokeWidth="1" strokeDasharray="2 10" />
      </svg>
      <svg className={`${styles.watchLayer} ${styles.watchFace}`} viewBox="0 0 440 440" fill="none" aria-hidden="true">
        <circle cx="220" cy="220" r={R} stroke="#2A0A0E" strokeWidth="18" />
        <circle
          className={styles.arc}
          cx="220"
          cy="220"
          r={R}
          stroke="#FF2A3D"
          strokeWidth="18"
          strokeLinecap="round"
          strokeDasharray={`${(CIRC * frac).toFixed(1)} ${CIRC.toFixed(1)}`}
          transform="rotate(-90 220 220)"
        />
        <path d="M196 18h48M220 18v22M352 70l16-16" stroke="#FF2A3D" strokeWidth="10" strokeLinecap="round" />
      </svg>
      <div className={styles.hand} style={{ transform: `rotate(${secDeg}deg)` }} aria-hidden="true">
        <span className={styles.handLine} />
      </div>
      <div className={styles.readout} role="timer" aria-live="off">
        <span className={styles.readoutLabel}>АСТАНА · СЕЙЧАС</span>
        <span className={`${styles.clock} glow`}>{t ? `${pad(t.h)}:${pad(t.m)}:${pad(t.s)}` : "--:--:--"}</span>
        <span className={styles.mode}>{t ? modeText(t.h, t.m) : " "}</span>
      </div>
    </div>
  );
}
