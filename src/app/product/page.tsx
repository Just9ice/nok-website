import Link from "next/link";
import Image from "next/image";
import styles from "../shared.module.css";
import { FadeIn } from "../components/ClientPageEffects";
import { PageBackground } from "../components/PageBackground";

const products = [
  {
    image: "/battery.jpg",
    title: "Battery & Inverter Systems",
    features: [
      "High- and low-voltage lithium packs",
      "Hybrid-ready with solar, grid, or generator",
      "Remote monitoring via web and mobile",
    ],
  },
  {
    image: "/solar.jpg",
    title: "Solar Power Systems",
    features: [
      "Residential and commercial installations",
      "Grid-tied and off-grid configurations",
      "Scalable panel and inverter setups",
    ],
  },
  {
    image: "/e-keke.jpg",
    title: "Electric Tricycles",
    features: [
      "Zero-emission last-mile transport",
      "Durable lithium battery packs",
      "Built for commercial and passenger use",
    ],
  },
  {
    image: "/software-solutions.jpg",
    title: "Software Solutions",
    features: [
      "Fleet management dashboards",
      "Energy performance analytics",
      "Real-time system monitoring",
    ],
  },
  {
    image: "/product.jpg",
    title: "EV & LFP Chargers",
    features: [
      "Fast and standard charging options",
      "Compatible with LFP battery chemistry",
      "Network-managed for smart scheduling",
    ],
  },
  {
    image: "/solar-lights.jpg",
    title: "Solar & Security Lights",
    features: [
      "All-in-one solar-powered units",
      "Motion-sensing and dusk-to-dawn modes",
      "Heavy-duty outdoor construction",
    ],
  },
  {
    image: "/farming.jpg",
    title: "Industrial & Agricultural Equipment",
    features: [
      "Solar-powered irrigation pumps",
      "Industrial battery backup systems",
      "Rugged equipment for field deployment",
    ],
  },
  {
    image: "/solar-cooling.jpg",
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
    <>
      {/* Full-bleed Creative Hero Banner */}
      <header
        className="relative overflow-hidden text-center text-white w-full px-4 pt-[180px] pb-16 md:px-8 md:pt-[260px] md:pb-[140px]"
        style={{
          backgroundImage: "linear-gradient(to bottom right, rgba(2, 6, 23, 0.95), rgba(15, 118, 110, 0.6)), url(/product2.jpg)",
          backgroundColor: "#020617",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          margin: "0",
          color: "white",
          borderBottom: "1px solid rgba(20, 184, 166, 0.2)",
        }}
      >
        <PageBackground />
        <FadeIn className="relative z-10 mx-auto max-w-4xl w-[90%] md:w-full rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl transition-all duration-300 p-6 md:p-10 mb-16">
          <div
            className={styles.badge}
            style={{
              borderColor: "rgba(45, 212, 191, 0.3)",
              color: "#2dd4bf", // vibrant teal/cyan accent
              background: "rgba(2, 6, 23, 0.4)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 20px rgba(45, 212, 191, 0.15)",
            }}
          >
            Our Products
          </div>
        
        <h1 className={styles.title} style={{ color: "white", textShadow: "0 8px 30px rgba(0,0,0,0.5)" }}>
          Clean Energy &amp; Mobility<br className="hidden sm:block" />
          <span style={{ color: "#2dd4bf", textShadow: "0 0 40px rgba(45, 212, 191, 0.4)" }}>Built for Real Life</span>
        </h1>
        
        <p className={styles.introText} style={{ color: "rgba(255,255,255,0.85)", textShadow: "0 4px 15px rgba(0,0,0,0.5)", fontSize: "1.25rem", maxWidth: "800px" }}>
          From reliable battery systems to electric vehicles and smart software,
          our product lineup is engineered to cut costs, reduce emissions, and
          keep life moving.
        </p>
        
        <div className={styles.ctaGroup} style={{ marginTop: "3.5rem" }}>
          <Link 
            href="/contact" 
            className="rounded-xl px-8 py-4 font-semibold text-slate-900 transition-all duration-300"
            style={{ backgroundColor: "#2dd4bf", boxShadow: "0 4px 20px rgba(45, 212, 191, 0.3)" }}
          >
            Get a Quote
          </Link>
          <Link 
            href="/financing" 
            className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
          >
             Financing Options
          </Link>
        </div>
      </FadeIn>
      </header>

      {/* Main Content Area */}
      <div className={styles.pageWrapper} style={{ paddingTop: "5rem" }}>
        <section className={styles.section} style={{ marginTop: "1rem" }}>
          <h2 className={styles.sectionTitle}>Our Portfolio</h2>
          <div className={styles.grid}>
            {products.map((product) => (
              <FadeIn key={product.title} className="relative">
                <div
                  className={`${styles.card} group overflow-hidden`}
                  style={{ padding: 0, textAlign: "left" }}
                >
                  {/* Premium Image Header */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-0 leading-tight text-shadow-md">
                        {product.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 h-full">
                    <ul className={styles.featureList} style={{ marginTop: 0 }}>
                      {product.features.map((feat, i) => (
                        <li key={i} className="mb-3 flex items-start text-slate-600 dark:text-slate-300">
                          <span className="mr-3 mt-1 flex-shrink-0">
                            <CheckIcon />
                          </span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
