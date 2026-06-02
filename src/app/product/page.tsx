import Link from "next/link";
import styles from "../shared.module.css";

const products = [
  {
    icon: "🔋",
    title: "Battery & Inverter Systems",
    features: [
      "High- and low-voltage lithium packs",
      "Hybrid-ready with solar, grid, or generator",
      "Remote monitoring via web and mobile",
    ],
  },
  {
    icon: "☀️",
    title: "Solar Power Systems",
    features: [
      "Residential and commercial installations",
      "Grid-tied and off-grid configurations",
      "Scalable panel and inverter setups",
    ],
  },
  {
    icon: "🛵",
    title: "Electric Tricycles",
    features: [
      "Zero-emission last-mile transport",
      "Durable lithium battery packs",
      "Built for commercial and passenger use",
    ],
  },
  {
    icon: "💻",
    title: "Software Solutions",
    features: [
      "Fleet management dashboards",
      "Energy performance analytics",
      "Real-time system monitoring",
    ],
  },
  {
    icon: "⚡",
    title: "EV & LFP Chargers",
    features: [
      "Fast and standard charging options",
      "Compatible with LFP battery chemistry",
      "Network-managed for smart scheduling",
    ],
  },
  {
    icon: "🔦",
    title: "Solar & Security Lights",
    features: [
      "All-in-one solar-powered units",
      "Motion-sensing and dusk-to-dawn modes",
      "Heavy-duty outdoor construction",
    ],
  },
  {
    icon: "🏭",
    title: "Industrial & Agricultural Equipment",
    features: [
      "Solar-powered irrigation pumps",
      "Industrial battery backup systems",
      "Rugged equipment for field deployment",
    ],
  },
  {
    icon: "❄️",
    title: "Solar-Powered Cooling",
    features: [
      "Off-grid refrigeration and cold storage",
      "Ideal for clinics, farms, and retail",
      "High-efficiency compressor technology",
    ],
  },
];

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    style={{ flexShrink: 0 }}
  >
    <circle cx="10" cy="10" r="10" fill="var(--primary-color-glow)" />
    <path
      d="M6 10l3 3 5-5"
      stroke="var(--primary-color)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ProductPage() {
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.heroHeader}>
        <div className={styles.badge}>Our Products</div>
        <h1 className={styles.title}>
          Clean Energy &amp; Mobility<br />Built for Real Life
        </h1>
        <p className={styles.introText}>
          From reliable battery systems to electric vehicles and smart software,
          our product lineup is engineered to cut costs, reduce emissions, and
          keep life moving.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="/contact" className={styles.primaryCta}>
            Get a Quote
          </Link>
          <Link href="/financing" className={styles.secondaryCta}>
            Financing Options
          </Link>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Portfolio</h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <div
              key={product.title}
              className={styles.card}
              style={{ textAlign: "left" }}
            >
              <div className={styles.cardIcon}>{product.icon}</div>
              <h3
                className={styles.cardTitle}
                style={{ textAlign: "center" }}
              >
                {product.title}
              </h3>
              <ul className={styles.featureList}>
                {product.features.map((feat, i) => (
                  <li key={i}>
                    <span className={styles.checkIcon}>
                      <CheckIcon />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
