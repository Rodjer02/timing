/**
 * Единая точка правды для контактов и SEO.
 * Значения в [скобках] — заглушки из макета: показываются на сайте, но не попадают в schema.org.
 */

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://timingcyber.kz").replace(/\/$/, "");

export const site = {
  name: "Timing Cyber Club",
  shortName: "TIMING",
  url: SITE_URL,

  /** Номер для wa.me без «+». */
  whatsappPhone: "77471579588",
  phone: "+7 747 157 95 88",

  address: "ул. К. Сатпаева 10",
  addressShort: "Сатпаева 10",
  addressNote: "1 этаж · 4 микрорайон, Алматы район",
  city: "Астана",

  // TODO: режим работы — текст и формат schema.org ("Mo-Su 10:00-08:00").
  hours: "[Часы работы]",
  openingHours: [] as string[],

  social: {
    telegram: "https://t.me/+iJVzQ7BI2k5kYTU6",
    tiktok: "https://www.tiktok.com/@timing.cyber.club",
    // TODO: ссылка на Instagram клуба.
    instagram: "#",
    twoGis: "https://2gis.kz/astana/geo/70000001104923405",
  },

  seo: {
    title: "Timing Cyber Club — компьютерный клуб в Астане: 12 залов, станция Scorpion",
    description:
      "Timing Cyber Club в Астане, ул. К. Сатпаева 10: 12 игровых зон и 33 места — от комнаты Redragon на 5 мест до единственной в Астане киберстанции Scorpion. Час от 1 300 ₸, ночь от 4 000 ₸. Бонусы за пополнение, бронь в WhatsApp.",
    keywords: [
      "Timing Cyber Club",
      "компьютерный клуб Астана",
      "киберклуб Астана",
      "игровой клуб Астана",
      "Scorpion Астана",
      "Сатпаева 10",
      "ночной пакет",
      "бонусы за пополнение",
    ],
  },
} as const;

/** «[Часы работы]» и пустые строки — ещё не заполнено. */
export const isPlaceholder = (v: string): boolean => v === "" || /^\[.*\]$/.test(v);

export const NAV = [
  { href: "#rooms", label: "Залы и цены" },
  { href: "#bonus", label: "Бонусы" },
  { href: "#news", label: "Новости" },
  { href: "#book", label: "Бронь" },
  { href: "#contacts", label: "Контакты" },
] as const;
