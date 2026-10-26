"use client";

import { PROMO } from "@/data/content";
import { pad } from "@/lib/format";
import { useAstanaNow } from "@/lib/useAstanaNow";
import styles from "./Promo.module.css";

/** Обратный отсчёт до конца акции сегодня (по времени Астаны). */
export function PromoTimer() {
  const t = useAstanaNow();

  let label = " ";
  let value = " ";
  if (t) {
    if (t.h < PROMO.untilHour) {
      const left = PROMO.untilHour * 3600 - (t.h * 3600 + t.m * 60 + t.s);
      label = "ДО КОНЦА АКЦИИ СЕГОДНЯ";
      value = `${pad(Math.floor(left / 3600))}:${pad(Math.floor((left % 3600) / 60))}:${pad(left % 60)}`;
    } else {
      label = "СЕГОДНЯ АКЦИЯ УЖЕ ЗАКОНЧИЛАСЬ";
      value = `Завтра до ${PROMO.untilHour}:00`;
    }
  }

  return (
    <div className={styles.timer}>
      <span className={styles.timerLabel}>{label}</span>
      <span className={`${styles.timerVal} glow-r`}>{value}</span>
    </div>
  );
}
