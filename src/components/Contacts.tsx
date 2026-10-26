import { site } from "@/data/site";
import { waMain } from "@/lib/whatsapp";
import { PinIcon } from "./icons";
import styles from "./Contacts.module.css";

export function Contacts() {
  const { social } = site;
  const links = [
    { label: "Telegram", href: social.telegram },
    { label: "TikTok", href: social.tiktok },
    { label: "Instagram", href: social.instagram },
    { label: "2ГИС", href: social.twoGis },
  ];

  return (
    <section id="contacts" className={`${styles.section} sec`} aria-labelledby="contacts-title">
      <div className="wrap" style={{ position: "relative" }}>
        <div className={styles.two}>
          <div className={`${styles.panel} panel reveal`}>
            <span className="kicker">05 / КОНТАКТЫ</span>
            <h2 id="contacts-title" className={`${styles.h2} glow`}>
              {site.city.toUpperCase()},
              <br />
              {site.address.toUpperCase()}
            </h2>
            <p className={styles.note}>{site.addressNote}</p>
            <div className={styles.item}>
              <span className={styles.label}>WhatsApp</span>
              <a className={styles.phone} href={waMain} target="_blank" rel="noopener noreferrer">
                {site.phone}
              </a>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>Режим работы</span>
              <span className={styles.hours}>{site.hours}</span>
            </div>
            <div className={styles.links}>
              {links.map((l) => (
                <a key={l.label} className={`${styles.link} ghost`} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <a className={`${styles.map} card reveal`} href={social.twoGis} target="_blank" rel="noopener noreferrer">
            <span className={styles.pin} aria-hidden="true">
              <span className={`${styles.pinRing} ring-p`} />
              <PinIcon className={styles.pinSvg} />
            </span>
            <span className={`${styles.mapTitle} glow`}>ОТКРЫТЬ В 2ГИС</span>
            <span className={styles.mapNote}>[Здесь можно встроить карту]</span>
          </a>
        </div>
      </div>
    </section>
  );
}
