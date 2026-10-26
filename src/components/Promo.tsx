import { PROMO } from "@/data/content";
import { waPromo } from "@/lib/whatsapp";
import { PromoTimer } from "./PromoTimer";
import { Smoke } from "./Smoke";
import styles from "./Promo.module.css";

export function Promo() {
  return (
    <section className={`${styles.section} wrap reveal`} aria-label="Акция для новичков">
      <div className={styles.box}>
        <Smoke
          puffs={[
            { width: 420, height: 300, left: -80, top: -120, background: "#C8102E", opacity: 0.5 },
            { width: 380, height: 300, right: "10%", bottom: -160, background: "#7A0A14", animationDelay: "-5s" },
          ]}
        />
        <div className={styles.left}>
          <span className={styles.tag}>АКЦИЯ ДЛЯ НОВИЧКОВ · {PROMO.untilText.toUpperCase()}</span>
          <span className={`${styles.amount} glow`}>{PROMO.amount}</span>
          <span className={styles.note}>НА БАЛАНС · ДЕЙСТВУЕТ ДО {PROMO.untilHour}:00</span>
        </div>
        <div className={styles.right}>
          <PromoTimer />
          <a className={`${styles.btn} wa`} href={waPromo} target="_blank" rel="noopener noreferrer">
            ЗАБРАТЬ БОНУС
          </a>
        </div>
      </div>
    </section>
  );
}
