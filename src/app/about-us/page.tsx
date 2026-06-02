import Link from "next/link";
import styles from "../shared.module.css";

const commitments = [
  {
    icon: "🎯",
    title: "Mission-Driven",
    text: "Cut fuel costs, improve uptime, and empower communities.",
  },
  {
    icon: "🤝",
    title: "Team-Focused",
    text: "Local jobs in installation, service, and software support.",
  },
  {
    icon: "🌿",
    title: "Sustainability",
    text: "Lower emissions, quieter streets, and safer spaces.",
  },
  {
    icon: "🔗",
    title: "Partnerships",
    text: "Long-term collaboration with utilities, municipalities, & OEMs.",
  },
];

export default function AboutUsPage() {
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.heroHeader}>
        <div className={styles.badge}>About Us</div>
        <h1 className={styles.title}>
          Powering Progress.<br />Building Trust. Driving Change.
        </h1>
        <p className={styles.introText}>
          At NOK Inc, our mission is simple: deliver dependable, affordable, and
          sustainable energy and mobility solutions. We believe clean power and
          smarter transport should be practical, accessible, and easy to use for
          everyone — from households to factories.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="/contact" className={styles.primaryCta}>
            Work With Us
          </Link>
          <Link href="/services" className={styles.secondaryCta}>
            Our Services
          </Link>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Commitment</h2>
        <div className={styles.grid}>
          {commitments.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
