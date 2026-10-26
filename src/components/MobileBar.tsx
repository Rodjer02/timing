import { waMain } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import styles from "./MobileBar.module.css";

export function MobileBar() {
  return (
    <div className={styles.bar}>
      <a className={`${styles.wa} wa`} href={waMain} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        БРОНЬ В WHATSAPP
      </a>
    </div>
  );
}
