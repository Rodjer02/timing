import { Bonus } from "@/components/Bonus";
import { Booking } from "@/components/Booking";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { MobileBar } from "@/components/MobileBar";
import { News } from "@/components/News";
import { Promo } from "@/components/Promo";
import { Rooms } from "@/components/Rooms";
import { PAGE_SMOKE, Smoke } from "@/components/Smoke";

export default function HomePage() {
  return (
    <div className="root">
      <Smoke puffs={PAGE_SMOKE} roam style={{ zIndex: -1, overflow: "hidden" }} />
      <Header />
      <main id="main">
        <Hero />
        <Promo />
        <Rooms />
        <Bonus />
        <News />
        <Booking />
        <Contacts />
      </main>
      <Footer />
      <MobileBar />
      <JsonLd />
    </div>
  );
}
