import { MIN_HOUR, MIN_NIGHT, ROOMS, TOTAL_SEATS } from "@/data/content";
import { tenge } from "@/lib/format";
import { waMain } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import { Smoke } from "./Smoke";
import { Stopwatch } from "./Stopwatch";
import styles from "./Hero.module.css";

const EMBERS = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7.3 + 3) % 100}%`,
  animationDelay: `${-(i * 0.83).toFixed(2)}s`,
  animationDuration: `${7 + (i % 5)}s`,
}));

export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className="smoke" aria-hidden="true">
        <Smoke
          puffs={[
            { width: 640, height: 520, left: -160, top: -120, background: "#B3121F" },
            { width: 560, height: 560, right: -160, top: 80, background: "#8A0E19", animationDelay: "-6s" },
            { width: 420, height: 380, left: "35%", bottom: -160, background: "#D4142A", animationDelay: "-11s", opacity: 0.4 },
          ]}
        />
        {EMBERS.map((e, i) => (
          <span key={i} className="ember" style={e} />
        ))}
      </div>

      <div className={`${styles.inner} wrap`}>
        <div className={styles.text}>
          <p className={`${styles.badge} in`}>
            <span className={`${styles.badgeDot} pulse`} aria-hidden="true" />
            Единственная киберстанция Scorpion в Астане
          </p>

          <h1 id="hero-title" className={`${styles.title} in`} style={{ animationDelay: ".12s" }}>
            <span className="glow flick">TIMING</span>
            <br />
            <span className={styles.titleSub}>CYBER CLUB</span>
            <span className="sr-only"> — компьютерный клуб в Астане</span>
          </h1>

          <p className={`${styles.lead} in`} style={{ animationDelay: ".24s" }}>
            {ROOMS.length} игровых зон — от комнаты Redragon на 5 мест до приватной станции Scorpion. Час от{" "}
            {tenge(MIN_HOUR)}, ночь до утра — от {tenge(MIN_NIGHT)}.
          </p>

          <div className={`${styles.actions} in`} style={{ animationDelay: ".36s" }}>
            <a className={`${styles.primary} wa`} href={waMain} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon width={22} height={22} />
              БРОНЬ В WHATSAPP
            </a>
            <a className={`${styles.ghost} ghost`} href="#rooms">
              ЗАЛЫ И ЦЕНЫ
            </a>
          </div>

          <div className={`${styles.stats} in`} style={{ animationDelay: ".48s" }}>
            <div className={`${styles.stat} dash`}>
              <div className={`${styles.statVal} glow`}>{ROOMS.length}</div>
              <div className={styles.statLabel}>
                <span className={styles.long}>игровых </span>зон
              </div>
            </div>
            <div className={`${styles.stat} dash`}>
              <div className={`${styles.statVal} glow`}>{TOTAL_SEATS}</div>
              <div className={styles.statLabel}>
                <span className={styles.long}>игровых </span>места
              </div>
            </div>
            <div className={`${styles.stat} dash`}>
              <div className={`${styles.statVal} glow`}>{tenge(MIN_HOUR)}</div>
              <div className={styles.statLabel}>час от</div>
            </div>
          </div>
        </div>

        <div className={`${styles.visual} in`} style={{ animationDelay: ".3s" }}>
          <Stopwatch />
        </div>
      </div>
    </section>
  );
}
