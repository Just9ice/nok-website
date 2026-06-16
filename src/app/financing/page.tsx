import Link from "next/link";
import styles from "../shared.module.css";
import { FadeIn, SpotlightCard } from "../components/ClientPageEffects";
import { PageBackground } from "../components/PageBackground";

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
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-background text-foreground transition-colors duration-300">
      <header
        className="relative overflow-hidden px-4 md:px-10 py-20 text-center text-white w-full bg-local md:bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(2, 6, 23, 0.95), rgba(15, 118, 110, 0.6)), url('/financing.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <PageBackground />

        <FadeIn className="relative z-10 mx-auto max-w-4xl w-[90%] md:w-full rounded-3xl bg-white/15 border border-white/20 backdrop-blur-md shadow-xl transition-all duration-300 text-center p-5 md:p-8 mb-16">
          <div className="inline-block rounded-full bg-teal-700/60 border border-white/30 px-6 md:px-7 py-2 md:py-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-white mb-6">
            Financing
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-white drop-shadow-lg mb-6">
            Clean Energy Should Be
            <br />
            Accessible for Everyone
          </h1>
          <p className="mx-auto max-w-3xl text-sm sm:text-xl lg:text-2xl text-white/75 [text-shadow:0_4px_8px_rgba(0,0,0,0.5)] mb-8">
            That&rsquo;s why we provide flexible payment plans and financing options to help homes, businesses, and communities adopt sustainable energy without the financial burden.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="/contact" className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-teal-600 text-slate-900 font-semibold shadow-lg transition-all duration-300 hover:from-teal-500 hover:to-teal-700 hover:-translate-y-1">
              Apply Now
            </Link>
            <Link href="/product" className="px-8 py-3 rounded-lg border border-white/30 bg-white/10 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50">
              View Products
            </Link>
          </div>
        </FadeIn>
      </header>

      <section className={styles.section}>
        <h2 className="font-black text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-wide mb-12 text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((item) => (
            <FadeIn key={item.title} className="relative">
              <SpotlightCard className="p-6 sm:p-8 bg-black/5 dark:bg-white/10 border border-slate-200 dark:border-white/20 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 dark:hover:border-white/40">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-teal-700/10 flex items-center justify-center text-2xl text-teal-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-slate-600 dark:text-white/70 leading-relaxed">{item.text}</p>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
