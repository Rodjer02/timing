export type Room = {
  id: string;
  name: string;
  kind: "ROOM" | "ZONE";
  seats: number;
  /** Цены по пакетам в порядке PACKAGES. */
  prices: [number, number, number, number, number];
};

export const ROOMS: Room[] = [
  { id: "redragon", name: "REDRAGON", kind: "ROOM", seats: 5, prices: [1300, 2600, 3900, 3700, 4000] },
  { id: "bloody", name: "BLOODY", kind: "ROOM", seats: 5, prices: [1300, 2600, 3900, 3700, 4000] },
  { id: "hyperx", name: "HYPERX", kind: "ROOM", seats: 4, prices: [1400, 2800, 4200, 4000, 4500] },
  { id: "msi", name: "MSI", kind: "ROOM", seats: 3, prices: [1400, 2800, 4200, 4000, 4500] },
  { id: "logitech", name: "LOGITECH", kind: "ROOM", seats: 3, prices: [1400, 2800, 4200, 4000, 4500] },
  { id: "razer", name: "RAZER", kind: "ROOM", seats: 2, prices: [1500, 3000, 4500, 4300, 4700] },
  { id: "corsair", name: "CORSAIR", kind: "ROOM", seats: 2, prices: [1500, 3000, 4500, 4300, 4700] },
  { id: "chill", name: "CHILL", kind: "ZONE", seats: 5, prices: [1900, 3800, 5700, 5800, 6000] },
  { id: "lenovo", name: "LENOVO", kind: "ROOM", seats: 1, prices: [2000, 4000, 6000, 5000, 6500] },
  { id: "steelseries", name: "STEELSERIES", kind: "ROOM", seats: 1, prices: [2000, 4000, 6000, 5000, 6500] },
  { id: "stream", name: "STREAM", kind: "ROOM", seats: 1, prices: [3300, 6600, 9900, 9000, 10500] },
  { id: "scorpion", name: "SCORPION", kind: "ROOM", seats: 1, prices: [5000, 10000, 15000, 14000, 18000] },
];

export const PACKAGES: { name: string; note: string; hours: number }[] = [
  { name: "1 ЧАС", note: "Почасовая оплата", hours: 1 },
  { name: "3 ЧАСА", note: "Пакет 2+1", hours: 3 },
  { name: "5 ЧАСОВ", note: "Пакет 3+2", hours: 5 },
  { name: "ДЕНЬ", note: "08:00 – 16:00", hours: 8 },
  { name: "НОЧЬ", note: "22:00 – 08:00", hours: 10 },
];

export const TOTAL_SEATS = ROOMS.reduce((n, r) => n + r.seats, 0);
export const MIN_HOUR = Math.min(...ROOMS.map((r) => r.prices[0]));
export const MIN_NIGHT = Math.min(...ROOMS.map((r) => r.prices[4]));

/** [пополнение, бонус] в тенге. */
export const BONUSES: ReadonlyArray<readonly [number, number]> = [
  [2000, 700],
  [3000, 1000],
  [5000, 2000],
  [10000, 5000],
];

/** [сумма пополнений, процент]. */
export const LOYALTY: ReadonlyArray<readonly [number, number]> = [
  [100000, 3],
  [300000, 5],
  [500000, 7],
  [700000, 9],
  [900000, 12],
  [1200000, 15],
  [1500000, 20],
];

export type NewsItem = { title: string; word: string; tag: string; text: string };

export const NEWS: NewsItem[] = [
  { word: "SCORPION", tag: "ЭКСКЛЮЗИВ", title: "Единственная киберстанция Scorpion в Астане", text: "1 место, от 5 000 ₸ за час. Ночь — 18 000 ₸." },
  { word: "CHILL", tag: "НОВИНКА", title: "Открыли Chill zone на 5 мест", text: "От 1 900 ₸ за час, ночь — 6 000 ₸." },
  { word: "STREAM", tag: "НОВИНКА", title: "Stream room — отдельная комната", text: "1 место, от 3 300 ₸ за час." },
];

export const PROMO = {
  amount: "+5 000 ₸",
  /** Час (по Астане), до которого действует акция каждый день. */
  untilHour: 19,
  until: "31.05.2027",
  untilText: "до конца мая 2027",
};

export const CHAT = [
  { from: "me", text: "Здравствуйте! Хочу забронировать Razer room на 21:00", delay: ".2s" },
  { from: "me", text: "Нас двое, пакет 3 часа", delay: "1.2s" },
  { from: "them", text: "Здравствуйте! Razer room на 21:00 закрепили", delay: "2.4s" },
  { from: "them", text: "Ждём на Сатпаева 10", delay: "3.4s" },
] as const;

export const seatsWord = (n: number): string => (n === 1 ? "место" : n < 5 ? "места" : "мест");
