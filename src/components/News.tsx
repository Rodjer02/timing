import { NEWS, PROMO } from "@/data/content";
import { site } from "@/data/site";
import { TelegramIcon } from "./icons";
import { Smoke } from "./Smoke";
import styles from "./News.module.css";

const COVER_PUFFS = [
  { width: 260, height: 200, left: "20%", top: -40, background: "#B3121F", opacity: 0.5 },
  { width: 260, height: 200, right: "10%", top: -30, background: "#9E0F1C", opacity: 0.5 },
  { width: 260, height: 200, left: "10%", top: -20, background: "#C8102E", opacity: 0.45 },
];

function TgLink({ className }: { className: string }) {
  return (
    <a className={`${styles.tg} ${className} ghost`} href={site.social.telegram} target="_blank" rel="noopener noreferrer">
      <TelegramIcon />
      Все новости в Telegram
    </a>
  );
}

export function News() {
  return (
    <section id="news" className={`${styles.section} sec`} aria-labelledby="news-title">
      <div className="wrap" style={{ position: "relative" }}>
        <div className={`${styles.head} reveal`}>
          <div className={styles.headText}>
            <span className="kicker">03 / НОВОСТИ</span>
            <h2 id="news-title" className={`${styles.h2} h2 glow`}>
              ЧТО НОВОГО
            </h2>
          </div>
          <TgLink className={styles.tgTop} />
        </div>

        <div className={styles.grid}>
          <article className={`${styles.feat} card reveal`}>
            <Smoke
              puffs={[
                { width: 520, height: 420, right: -100, top: -120, background: "#C8102E", opacity: 0.55 },
                { width: 400, height: 320, left: -100, bottom: -100, background: "#6E0A13", animationDelay: "-6s" },
              ]}
            />
            <span className={`${styles.featBig} glow`} aria-hidden="true">
              +5000
            </span>
            <div className={styles.featBody}>
              <span className={styles.featTag}>АКЦИЯ</span>
              <h3 className={styles.featTitle}>{PROMO.amount} на баланс для новичков</h3>
              <p className={styles.featText}>
                Первый визит? Получи 5 000 ₸ на игровой баланс. Акция идёт {PROMO.untilText} и действует до{" "}
                {PROMO.untilHour}:00.
              </p>
              <span className={styles.date}>до {PROMO.until}</span>
            </div>
          </article>

          {NEWS.map((n, i) => (
            <article key={n.word} className={`${styles.card} card reveal`}>
              <div className={styles.cover}>
                <Smoke puffs={[COVER_PUFFS[i % COVER_PUFFS.length]]} />
                <span className={`${styles.coverWord} glow`} aria-hidden="true">
                  {n.word}
                </span>
              </div>
              <div className={styles.body}>
                <span className={styles.tag}>{n.tag}</span>
                <h3 className={styles.title}>{n.title}</h3>
                <p className={styles.text}>{n.text}</p>
              </div>
            </article>
          ))}

          <article className={`${styles.next} card reveal`}>
            <span className={styles.nextLabel}>[СЛЕДУЮЩАЯ НОВОСТЬ]</span>
            <h3 className={styles.title}>[Турнир, новый зал или акция]</h3>
            <p className={`${styles.text} ${styles.nextText}`}>Место под следующую новость клуба.</p>
          </article>
        </div>

        <TgLink className={styles.tgBottom} />
      </div>
    </section>
  );
}
