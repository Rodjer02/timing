"use client";

import { useEffect, useState } from "react";
import { NAV, site } from "@/data/site";
import { waMain } from "@/lib/whatsapp";
import { CloseIcon, LogoIcon, MenuIcon, WhatsAppIcon } from "./icons";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} wrap`}>
        <a href="#top" className={styles.logo} aria-label={`${site.name} — в начало страницы`}>
          <LogoIcon className={styles.logoIcon} />
          <span className={styles.word}>
            <span className={`${styles.timing} glow`}>TIMING</span>
            <span className={styles.sub}>CYBER CLUB</span>
          </span>
        </a>

        <nav aria-label="Основное меню" className={styles.nav}>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={styles.navlink}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className={`${styles.cta} wa`} href={waMain} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon width={18} height={18} />
          ЗАБРОНИРОВАТЬ
        </a>

        <button
          type="button"
          className={styles.burger}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Мобильное меню" className={styles.menu}>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className={styles.menuLink}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
