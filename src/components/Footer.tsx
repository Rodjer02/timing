import { site } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.big} aria-hidden="true">
        TIMING
      </div>
      <div className={`${styles.inner} wrap`}>
        <span>
          <span className={styles.brand}>TIMING</span> · Cyber Club · {site.city}
        </span>
        <span>
          {site.address} · {site.phone}
        </span>
      </div>
    </footer>
  );
}
