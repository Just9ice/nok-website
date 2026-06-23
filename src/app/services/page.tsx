import Link from "next/link";
import styles from "../shared.module.css";
import { FadeIn, SpotlightCard } from "../components/ClientPageEffects";
import { PageBackground } from "../components/PageBackground";

const services = [
  {
    icon: "🔧",
    title: "Installation",
    text: "Certified teams set up your systems safely and efficiently.",
    image: "/projects/solar-installation2.jpeg",
  },
  {
    icon: "⚙️",
    title: "Maintenance",
    text: "Preventive checks and timely repairs to maximize uptime.",
    image: "/projects/workshop-close.jpeg",
  },
  {
    icon: "📡",
    title: "Monitoring",
    text: "Remote dashboards for batteries, solar, and fleets.",
    image: "/software-solutions.jpg",
  },
  {
    icon: "📞",
    title: "Support",
    text: "A dedicated help desk, spare-parts stock, and clear SLAs.",
    image: "/projects/spare-supplies3.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Full-bleed Hero Banner */}
      <header
        className="relative overflow-hidden text-center text-white w-full px-4 pt-[180px] pb-16 md:px-8 md:pt-[240px] md:pb-[140px] bg-local md:bg-fixed"
        style={{
          backgroundImage: "url(/green-service.jpg)",
          backgroundColor: "#062b21",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          margin: "0",
          color: "white",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <PageBackground />
        <FadeIn className="relative z-10 mx-auto max-w-4xl w-[90%] md:w-full rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl transition-all duration-300 p-6 md:p-10 mb-16">
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

          <h1
            className={styles.title}
            style={{ color: "white", textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
          >
            We Support Every Solution <br className="hidden sm:block" />
            From Start to Finish
          </h1>

          <p
            className={styles.introText}
            style={{
              color: "rgba(255,255,255,0.85)",
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            From initial setup to long-term care, our full-cycle service model
            ensures your energy and mobility systems deliver maximum value with
            zero hassle.
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
              <FadeIn key={item.title} className="relative group">
                <SpotlightCard className="p-6 sm:p-8 bg-transparent border border-slate-200 dark:border-white/20 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 dark:hover:border-white/40 h-full overflow-hidden">
                  {/* Background Image Layer */}
                  <div
                    className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* Overlay to ensure text readability */}
                  <div className="absolute inset-0 z-0 bg-white/80 dark:bg-black/70 backdrop-blur-[2px] transition-colors duration-300 group-hover:bg-white/60 dark:group-hover:bg-black/50" />

                  <div className="relative z-10 h-full flex flex-col">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-800/10 dark:bg-teal-700/20 text-teal-700 dark:text-teal-300 text-3xl shadow-sm border border-teal-700/10 backdrop-blur-md">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-slate-800 dark:text-white/90 leading-relaxed font-medium">
                      {item.text}
                    </p>
                  </div>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
