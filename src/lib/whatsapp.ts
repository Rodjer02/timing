import type { Room } from "@/data/content";
import { site } from "@/data/site";

export function waLink(text: string): string {
  return `https://wa.me/${site.whatsappPhone}?text=${encodeURIComponent(text)}`;
}

/** Общие кнопки «Бронь в WhatsApp». */
export const waMain = waLink("Здравствуйте! Хочу забронировать место в Timing Cyber Club.");

/** Кнопка акции для новичков. */
export const waPromo = waLink("Здравствуйте! Я новичок, хочу воспользоваться акцией +5000 на баланс.");

/** Бронь конкретного зала — время клиент допишет сам. */
export function waRoom(r: Room): string {
  return waLink(`Здравствуйте! Хочу забронировать ${r.name} ${r.kind}. Время: `);
}
