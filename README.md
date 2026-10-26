# Timing Cyber Club — сайт

Лендинг компьютерного клуба на Next.js 16 (App Router), React 19, TypeScript, CSS Modules. Дизайн из `material/` перенесён один в один: красный неон, дым и угольки, живой секундомер со временем Астаны, таймер акции, переключение 12 залов с тарифами.

## Запуск

```bash
npm install
cp .env.example .env.local
npm run dev                  # http://localhost:3000
```

Продакшен: `npm run build && npm start`. Проверки: `npm run typecheck`, `npm run lint`.

## Контент

- `src/data/site.ts` — контакты, соцсети, SEO. Заглушки с `TODO`: режим работы, Instagram.
- `src/data/content.ts` — залы и цены по пакетам, бонусы, лояльность, новости, акция.
- `.env.local` → `NEXT_PUBLIC_SITE_URL` — канонический адрес сайта.

## Бронь

Бэкенда нет: кнопки ведут в WhatsApp (`wa.me`) с готовым текстом — общий, по акции и по выбранному залу. Тексты — `src/lib/whatsapp.ts`.

## Время

Секундомер и таймер акции считают время Астаны (UTC+5) на клиенте: `src/lib/useAstanaNow.ts`. На сервере рендерится заглушка `--:--:--`, поэтому нет расхождений при гидрации.
