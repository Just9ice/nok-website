import Link from "next/link";
import styles from "../shared.module.css";
import { FadeIn, SpotlightCard } from "../components/ClientPageEffects";
import { PageBackground } from "../components/PageBackground";

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
    <div className="relative min-h-screen min-w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#020617] text-white">
      <header
        className="relative overflow-hidden px-10 py-20 text-center text-white w-full"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(2, 6, 23, 0.95), rgba(15, 118, 110, 0.6)), url('/Windmill2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <PageBackground />

        <FadeIn className="relative z-10 mx-auto max-w-4xl rounded-3xl bg-white/15 border border-white/20 backdrop-blur-md shadow-xl transition-all duration-300 text-center p-10 mb-16">
          <div className="inline-block rounded-full bg-teal-700/60 border border-white/30 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white mb-6">
            About Us
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white drop-shadow-lg mb-6">
            Powering Progress.
            <br />
            Building Trust. Driving Change.
          </h1>

          <p className="mx-auto max-w-3xl text-sm sm:text-xl lg:text-2xl text-white/75 [text-shadow:0_4px_8px_rgba(0,0,0,0.4)] mb-8">
            At NOK Inc, our mission is simple: deliver dependable, affordable, and sustainable energy and mobility solutions. We believe clean power and smarter transport should be practical, accessible, and easy to use for everyone — from households to factories.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="/contact" className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-teal-600 text-slate-900 font-semibold shadow-lg transition-all duration-300 hover:from-teal-500 hover:to-teal-700 hover:-translate-y-1">
              Work With Us
            </Link>
            <Link href="/services" className="px-8 py-3 rounded-lg border border-white/30 bg-white/10 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50">
              Our Services
            </Link>
          </div>
        </FadeIn>
      </header>

      <section className={styles.section}>
        <h2 className="font-black text-5xl text-white tracking-wide mb-12 text-center">
          Our Commitment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {commitments.map((item) => (
            <FadeIn key={item.title} className="relative">
              <SpotlightCard className="bg-white/10 p-8 border border-white/20 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/40">
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-teal-700/10 flex items-center justify-center text-2xl text-teal-300">
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
  );
}
