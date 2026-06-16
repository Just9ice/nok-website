import Link from "next/link";
import styles from "../shared.module.css";
import { FadeIn, SpotlightCard } from "../components/ClientPageEffects";
import { PageBackground } from "../components/PageBackground";

const services = [
  {
    icon: "🔧",
    title: "Installation",
    text: "Certified teams set up your systems safely and efficiently.",
  },
  {
    icon: "⚙️",
    title: "Maintenance",
    text: "Preventive checks and timely repairs to maximize uptime.",
  },
  {
    icon: "📡",
    title: "Monitoring",
    text: "Remote dashboards for batteries, solar, and fleets.",
  },
  {
    icon: "📞",
    title: "Support",
    text: "A dedicated help desk, spare-parts stock, and clear SLAs.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Full-bleed Hero Banner */}
      <header
        className="relative overflow-hidden text-center text-white w-full"
        style={{
          backgroundImage: "url(/green-service.jpg)",
          backgroundColor: "#062b21",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "overlay",
          padding: "12rem 2rem 8rem",
          margin: "0",
          color: "white",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <PageBackground />
        <FadeIn className="relative z-10 mx-auto max-w-4xl rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl transition-all duration-300 p-10 mb-16">
          <div
            className={styles.badge}
            style={{
              borderColor: "rgba(255,255,255,0.2)",
              color: "white",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
            }}
          >
            Our Services
          </div>

          <h1 className={styles.title} style={{ color: "white", textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
            We Support Every Solution
            <br />
            From Start to Finish
          </h1>

          <p className={styles.introText} style={{ color: "rgba(255,255,255,0.85)", textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
            From initial setup to long-term care, our full-cycle service model ensures your energy and mobility systems deliver maximum value with zero hassle.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="/contact" className={styles.primaryCta}>
              Request a Quote
            </Link>
            <Link
              href="/product"
              className={`${styles.secondaryCta} hover:bg-white/10 transition-colors`}
              style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}
            >
              View Products
            </Link>
          </div>
        </FadeIn>
      </header>

      {/* Main Content Area */}
      <div className={styles.pageWrapper} style={{ paddingTop: "4rem" }}>
        <section className={styles.section} style={{ marginTop: "2rem" }}>
          <h2 className={styles.sectionTitle}>What We Do</h2>
          <div className={styles.grid}>
            {services.map((item) => (
              <FadeIn key={item.title} className="relative">
                <SpotlightCard className="p-8 bg-white/10 border border-white/20 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/40">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-700/10 text-teal-300 text-3xl">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.text}</p>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
