import { BONUSES, LOYALTY } from "@/data/content";
import { tenge } from "@/lib/format";
import { Smoke } from "./Smoke";
import styles from "./Bonus.module.css";

const MAX_PCT = Math.max(...LOYALTY.map(([, p]) => p));

export function Bonus() {
  return (
    <section id="bonus" className={`${styles.section} sec`} aria-labelledby="bonus-title">
      <Smoke puffs={[{ width: 700, height: 500, left: "30%", top: -200, background: "#9E0F1C", opacity: 0.4 }]} />
      <div className="wrap" style={{ position: "relative" }}>
        <div className={`${styles.head} reveal`}>
          <span className="kicker">02 / БОНУСЫ</span>
          <h2 id="bonus-title" className={`${styles.h2} h2 glow`}>
            ПОПОЛНЯЙ — ПОЛУЧАЙ БОЛЬШЕ
          </h2>
        </div>

        <div className={styles.two}>
          <div className={`${styles.panel} panel reveal`}>
            <h3 className={styles.h3}>БОНУСЫ ЗА ПОПОЛНЕНИЕ</h3>
            {BONUSES.map(([pay, bonus]) => (
              <div key={pay} className={`${styles.row} prow dash`}>
                <span className={styles.pay}>{tenge(pay)}</span>
                <span className={`${styles.plus} glow-r`} aria-hidden="true">
                  +
                </span>
                <span className={styles.bonusBox}>
                  <span className={`${styles.bonus} glow`}>
                    <span className="sr-only">бонус </span>
                    {tenge(bonus)}
                  </span>
                  <span className={styles.pct}>+{Math.round((bonus / pay) * 100)}%</span>
                </span>
              </div>
            ))}
          </div>

          <div className={`${styles.panel} panel reveal`}>
            <h3 className={`${styles.h3} ${styles.h3Loyal}`}>СИСТЕМА ЛОЯЛЬНОСТИ</h3>
            <p className={styles.sub}>Чем больше сумма пополнений, тем выше твой процент.</p>
            <div className={styles.levels}>
              {LOYALTY.map(([sum, pct]) => (
                <div key={sum} className={styles.level}>
                  <span className={styles.sum}>{tenge(sum)}</span>
                  <span className={styles.bar} aria-hidden="true">
                    <span className={`${styles.barFill} fill`} style={{ width: `${(pct / MAX_PCT) * 100}%` }} />
                  </span>
                  <span className={`${styles.levelPct} glow`}>{pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
