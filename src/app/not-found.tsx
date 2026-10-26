import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Страница не найдена",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="root"
      style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, textAlign: "center" }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <span className="kicker">404</span>
        <h1 className="glow" style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: 64, lineHeight: 1 }}>
          ВРЕМЯ ВЫШЛО
        </h1>
        <p style={{ color: "var(--muted)", maxWidth: 420 }}>Такой страницы нет. Зато все 12 залов на месте.</p>
        <Link
          href="/"
          className="wa"
          style={{
            marginTop: 10,
            background: "var(--red)",
            color: "#fff",
            textDecoration: "none",
            fontFamily: "var(--ff-display)",
            fontWeight: 800,
            padding: "16px 28px",
            borderRadius: 16,
          }}
        >
          НА ГЛАВНУЮ
        </Link>
      </div>
    </main>
  );
}
