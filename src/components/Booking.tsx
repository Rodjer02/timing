import { CHAT } from "@/data/content";
import { site } from "@/data/site";
import { waMain } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import { Smoke } from "./Smoke";
import styles from "./Booking.module.css";

const STEPS = ["Выбери зал и время", "Напиши в WhatsApp", `Приходи на ${site.addressShort}`];

export function Booking() {
  return (
    <section id="book" className={`${styles.section} sec`} aria-labelledby="book-title">
      <Smoke
        puffs={[
          { width: 700, height: 600, right: -200, top: 0, background: "#B3121F", opacity: 0.45 },
          { width: 500, height: 500, left: -200, bottom: -100, background: "#6E0A13", animationDelay: "-7s" },
        ]}
      />
      <div className={`${styles.inner} wrap`}>
        <div className={`${styles.info} reveal`}>
          <span className="kicker">04 / БРОНЬ</span>
          <h2 id="book-title" className={styles.h2}>
            <span className="glow">ВСЯ БРОНЬ</span>
            <br />
            <span className="glow-r">В WHATSAPP</span>
          </h2>
          <p className={styles.lead}>Без форм и регистрации. Напиши зал, время и сколько вас — администратор закрепит места.</p>

          <ol className={styles.steps}>
            {STEPS.map((s, i) => (
              <li key={s} className={styles.step}>
                <span className={`${styles.stepNum} glow-r`}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.stepText}>{s}</span>
              </li>
            ))}
          </ol>

          <div className={styles.cta}>
            <div className={styles.waWrap}>
              <span className="ring-p" aria-hidden="true" />
              <span className="ring-p" style={{ animationDelay: "1.1s" }} aria-hidden="true" />
              <a className={`${styles.wa} wa`} href={waMain} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon width={24} height={24} />
                НАПИСАТЬ В WHATSAPP
              </a>
            </div>
            <a className={`${styles.phone} glow`} href={waMain} target="_blank" rel="noopener noreferrer">
              {site.phone}
            </a>
          </div>
        </div>

        <div className={`${styles.mock} reveal hide-m`} aria-hidden="true">
          <div className={styles.device}>
            <div className={styles.screen}>
              <div className={styles.notch} />
              <div className={styles.chatHead}>
                <span className={styles.avatar}>T</span>
                <div className={styles.chatName}>
                  <span className={styles.chatTitle}>{site.name}</span>
                  <span className={styles.online}>online</span>
                </div>
              </div>
              <div className={styles.msgs}>
                {CHAT.map((m) => (
                  <div
                    key={m.text}
                    className={`${styles.msg} ${m.from === "me" ? styles.me : styles.them} msg`}
                    style={{ animationDelay: m.delay }}
                  >
                    {m.text}
                  </div>
                ))}
                <div className={`${styles.msg} ${styles.them} ${styles.typing} msg`} style={{ animationDelay: "4.4s" }}>
                  <span className="dot" />
                  <span className="dot" style={{ animationDelay: ".15s" }} />
                  <span className="dot" style={{ animationDelay: ".3s" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
