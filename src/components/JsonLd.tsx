import { MIN_HOUR, PACKAGES, ROOMS } from "@/data/content";
import { isPlaceholder, site } from "@/data/site";

/**
 * schema.org: локальный бизнес + сайт + почасовые офферы по залам.
 * Заглушки (в [скобках]) и пустые поля не выводятся.
 */
export function JsonLd() {
  const businessId = `${site.url}/#business`;
  const websiteId = `${site.url}/#website`;
  const maxNight = Math.max(...ROOMS.map((r) => r.prices[4]));

  const offers = ROOMS.map((r) => ({
    "@type": "Offer",
    name: `${r.name} ${r.kind} — ${PACKAGES[0].name.toLowerCase()}`,
    price: r.prices[0],
    priceCurrency: "KZT",
    priceSpecification: { "@type": "UnitPriceSpecification", price: r.prices[0], priceCurrency: "KZT", unitCode: "HUR" },
    itemOffered: { "@type": "Service", name: `${r.name} ${r.kind}`, serviceType: "Аренда игрового места" },
    availability: "https://schema.org/InStock",
  }));

  const sameAs = Object.values(site.social).filter((u) => u && u !== "#");

  const business: Record<string, unknown> = {
    "@type": ["LocalBusiness", "EntertainmentBusiness"],
    "@id": businessId,
    name: site.name,
    alternateName: "TIMING Cyber Club",
    description: site.seo.description,
    url: site.url,
    telephone: `+${site.whatsappPhone}`,
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/icon.svg`,
    priceRange: `${MIN_HOUR} – ${maxNight} ₸`,
    currenciesAccepted: "KZT",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.city,
      addressCountry: "KZ",
    },
    areaServed: { "@type": "City", name: site.city },
    hasMap: site.social.twoGis,
    sameAs,
    makesOffer: offers,
  };
  if (site.openingHours.length && !isPlaceholder(site.hours)) business.openingHours = site.openingHours;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      business,
      { "@type": "WebSite", "@id": websiteId, url: site.url, name: site.name, inLanguage: "ru", publisher: { "@id": businessId } },
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: site.seo.title,
        description: site.seo.description,
        inLanguage: "ru",
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
