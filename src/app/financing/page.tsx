import Link from "next/link";
import styles from "../shared.module.css";

const plans = [
  {
    icon: "💳",
    title: "Flexible Payments",
    text: "Spread the cost of your energy system over manageable monthly installments tailored to your budget.",
  },
  {
    icon: "📊",
    title: "Remote Monitoring",
    text: "Remote dashboards for batteries, solar, and fleets — stay informed wherever you are.",
  },
  {
    icon: "🏦",
    title: "Zero Upfront Options",
    text: "Get started with little or no money down. We work with financing partners to make clean energy accessible.",
  },
];

export default function FinancingPage() {
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.heroHeader}>
        <div className={styles.badge}>Financing</div>
        <h1 className={styles.title}>
          Clean Energy Should Be
          <br />
          Accessible for Everyone
        </h1>
        <p className={styles.introText}>
          That&rsquo;s why we provide flexible payment plans and financing
          options to help homes, businesses, and communities adopt sustainable
          energy without the financial burden.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="/contact" className={styles.primaryCta}>
            Apply Now
          </Link>
          <Link href="/product" className={styles.secondaryCta}>
            View Products
          </Link>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.grid}>
          {plans.map((item) => (
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
