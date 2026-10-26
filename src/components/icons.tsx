import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base: P = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function WhatsAppIcon(props: P) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" {...base} {...props}>
      <path d="M3 21l1.7-4.7A8.6 8.6 0 1 1 8 19.7z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z" />
    </svg>
  );
}

export function TelegramIcon(props: P) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" {...base} {...props}>
      <path d="M21 4L3 11l6 2 2 6 3-4 5 4z" />
      <path d="M9 13l8-6" />
    </svg>
  );
}

export function MenuIcon(props: P) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" {...base} {...props}>
      <path d="M4 7h16M4 12h10M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: P) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

/** Логотип — секундомер. */
export function LogoIcon(props: P) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
      <circle cx="20" cy="22" r="14" stroke="#FF2A3D" strokeWidth="3" style={{ filter: "drop-shadow(0 0 6px #FF2A3D)" }} />
      <path d="M16 4h8M20 4v4M31 9l2.5-2.5" stroke="#FF2A3D" strokeWidth="3" strokeLinecap="round" />
      <path d="M20 22V14" stroke="#FFE4E6" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="22" r="2.4" fill="#FFE4E6" />
    </svg>
  );
}

export function PinIcon(props: P) {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="#FF2A3D" stroke="#FFE4E6" strokeWidth="1.2" aria-hidden="true" {...props}>
      <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.6" fill="#FFE4E6" />
    </svg>
  );
}
