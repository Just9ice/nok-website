import Link from "next/link";
import {
  SunMedium,
  BatteryCharging,
  Bike,
  ShieldCheck,
  Wallet,
  Smartphone,
  BarChart3,
  Globe,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden transition-colors duration-300">
      <Header />
      {/* Hero Section */}
      <section
        className="relative flex min-h-screen items-center bg-cover bg-center bg-local md:bg-fixed"
        style={{
          backgroundImage: "url(/Windmill2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/95 via-[#020817]/80 to-[#020817]/40" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-12">
          <div className="max-w-3xl">
            {/* BADGE */}
            <div className="mb-2 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm text-green-300 backdrop-blur-md w-fit">
              ⚡ Sustainable Energy Solutions
            </div>

            {/* Title */}
            <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl text-white">
              Powering The World&apos;s{" "}
              <span className="bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent">
                Energy Transition
              </span>
            </h1>

            {/* Text */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
              At NOK Inc, we help homes, businesses, and communities take
              control of their energy and mobility with solar systems, smart
              batteries, electric transport, and modern cooling solutions.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/product"
                className="rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300"
              >
                Explore Products
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-20 flex flex-wrap gap-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-green-400">
                  Industrial & Residential
                </h3>
                <p className="mt-2 text-slate-200/80">Installations</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-green-400">98%</h3>
                <p className="mt-2 text-slate-200/80">Customer Satisfaction</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-green-400">24/7</h3>
                <p className="mt-2 text-slate-200/80">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-6 py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-400">
              Our Solutions
            </p>

            <h2 className="text-4xl font-bold lg:text-5xl">What We Offer</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {/* Cards */}
            <Link
              href="/solutions/solar-power"
              className="group relative overflow-hidden block rounded-3xl border border-slate-200 dark:border-white/10 p-6 sm:p-8 transition duration-300 hover:-translate-y-2 hover:border-green-400/30 shadow-lg shadow-black/5"
            >
              <div
                className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.85)), url('/solar-panel-4.jpeg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-green-400 backdrop-blur-md">
                  <SunMedium size={34} />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {" "}
                  Solar Power{" "}
                </h3>
                <p className="leading-8 text-white/75">
                  Highly efficient solar solutions designed for homes,
                  businesses, and industrial operations.
                </p>
              </div>
            </Link>

            {/* CARD */}
            <Link
              href="/solutions/smart-batteries"
              className="group relative overflow-hidden block rounded-3xl border border-slate-200 dark:border-white/10 p-6 sm:p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-400/30 shadow-lg shadow-black/5"
            >
              <div
                className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.85)), url('/projects/batteries.jpeg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-blue-400 backdrop-blur-md">
                  <BatteryCharging size={34} />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {" "}
                  Smart Batteries{" "}
                </h3>
                <p className="leading-8 text-white/75">
                  Intelligent battery storage systems that keep your energy
                  stable, reliable, and uninterrupted.
                </p>
              </div>
            </Link>

            {/* CARD */}
            <Link
              href="/solutions/electric-mobility"
              className="group relative overflow-hidden block rounded-3xl border border-slate-200 dark:border-white/10 p-6 sm:p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-400/30 shadow-lg shadow-black/5"
            >
              <div
                className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.85)), url('/projects/keke-cargo.jpeg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-purple-400 backdrop-blur-md">
                  <Bike size={34} />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  Electric Mobility
                </h3>
                <p className="leading-8 text-white/75">
                  Cost-effective and sustainable transportation solutions for
                  modern urban mobility.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 pb-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-400">
              Why NOK?
            </p>
            <h2 className="text-4xl font-bold lg:text-5xl">Why Choose Us?</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {/* CARD */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
              <ShieldCheck className="mb-6 text-green-400" size={36} />
              <h3 className="mb-4 text-2xl font-semibold"> Reliable </h3>
              <p className="leading-8 text-slate-600 dark:text-white/65">
                High-quality systems, certified installation, and dependable
                support whenever you need it.
              </p>
            </div>

            {/* Card */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
              <Wallet className="mb-6 text-green-400" size={36} />
              <h3 className="mb-4 text-2xl font-semibold"> Affordable </h3>
              <p className="leading-8 text-slate-600 dark:text-white/65">
                Reduce operational costs with efficient energy systems and
                flexible financing options.
              </p>
            </div>

            {/* CARD */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
              <Zap className="mb-6 text-green-400" size={36} />
              <h3 className="mb-4 text-2xl font-semibold">
                {" "}
                High Performance{" "}
              </h3>
              <p className="leading-8 text-slate-600 dark:text-white/65">
                Experience uncompromised power and reliability with our
                state-of-the-art energy technologies.
              </p>
            </div>

            {/* CARD */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
              <Smartphone className="mb-6 text-green-400" size={36} />
              <h3 className="mb-4 text-2xl font-semibold">Smart Technology</h3>
              <p className="leading-8 text-slate-600 dark:text-white/65">
                Monitor and manage your systems using intuitive digital tools
                and mobile apps.
              </p>
            </div>

            {/* CARD */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
              <BarChart3 className="mb-6 text-green-400" size={36} />
              <h3 className="mb-4 text-2xl font-semibold"> Scalable </h3>
              <p className="leading-8 text-slate-600 dark:text-white/65">
                Start with what you need today and expand your energy
                infrastructure over time.
              </p>
            </div>

            {/* CARD */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
              <Globe className="mb-6 text-green-400" size={36} />
              <h3 className="mb-4 text-2xl font-semibold"> Sustainable </h3>
              <p className="leading-8 text-slate-600 dark:text-white/65">
                Cleaner, quieter, and environmentally responsible solutions for
                future-focused communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-6 pb-28 lg:px-12">
        <div
          className="mx-auto max-w-7xl rounded-[24px] md:rounded-[40px] border border-slate-200 dark:border-white/10 bg-gradient-to-br from-green-500/10 to-blue-500/10 dark:from-green-500 dark:to-blue-500/10 p-6 md:p-12"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(15, 118, 110, 0.55)), url('/projects/solar-panels.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-400">
              Build The Future
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight lg:text-5xl dark:text-slate-900">
              Ready to Switch to Smarter Energy?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-700">
              Let&apos;s help you reduce energy costs, improve reliability, and
              move towards a cleaner future with modern energy solutions.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-400 hover:text-white/80"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
