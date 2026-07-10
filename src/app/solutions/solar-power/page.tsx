"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  SunMedium,
  ArrowRight,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const mediaItems = [
  {
    type: "image",
    src: "/projects/solar-installation2.jpeg",
    alt: "Industrial Solar Install",
  },
  {
    type: "video",
    src: "/projects/solar.mp4",
    alt: "Industrial Solar Array Drone View",
  },
  {
    type: "image",
    src: "/projects/solar-installation1.jpeg",
    alt: "Solar Installation Site",
  },
  {
    type: "image",
    src: "/projects/solar-panel-2.jpeg",
    alt: "Solar Inverter Setup",
  },
  {
    type: "image",
    src: "/projects/solar-panel-1.jpeg",
    alt: "Installed Solar Panel",
  },
  {
    type: "image",
    src: "/projects/solar-light.jpeg",
    alt: "Street Light Solar Install",
  },
  {
    type: "image",
    src: "/projects/solar-installation.jpeg",
    alt: "Solar Inverter Setup",
  },
  {
    type: "image",
    src: "/projects/solar-installation-2.jpeg",
    alt: "Installed Solar Panel",
  },
  {
    type: "image",
    src: "/projects/solar-installation-3.jpeg",
    alt: "Street Light Solar Install",
  },
  {
    type: "image",
    src: "/projects/solar-installation-4.jpeg",
    alt: "Solar / Inverter Installation",
  },
  {
    type: "image",
    src: "/projects/solar-installation-5.jpeg",
    alt: "Solar / Inverter Installation",
  },
  {
    type: "image",
    src: "/projects/solar-installation-6.jpeg",
    alt: "Solar / Inverter Installation",
  },
  {
    type: "image",
    src: "/projects/solar-components.jpeg",
    alt: "Solar / Inverter Installation",
  },
  {
    type: "image",
    src: "/projects/solar-components-2.jpeg",
    alt: "Solar / Inverter Installation",
  },
  {
    type: "image",
    src: "/projects/solar-components-3.jpeg",
    alt: "Solar / Inverter Installation",
  },
];

export default function SolarPowerPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + mediaItems.length) % mediaItems.length,
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % mediaItems.length,
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  // Replay video when lightbox item changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [lightboxIndex]);

  // Prevent body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const activeItem = lightboxIndex !== null ? mediaItems[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-6 lg:px-12 bg-black/5 dark:bg-white/5">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-green-400/20 via-background to-background" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-green-500/10 text-green-400">
            <SunMedium size={40} />
          </div>
          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Clean Energy from the{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Sun
            </span>
          </h1>
          <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-white/70 max-w-2xl mx-auto">
            Highly efficient solar solutions designed for homes, businesses, and
            industrial operations. Generate your own power, reduce your carbon
            footprint, and secure your energy independence.
          </p>
        </motion.div>
      </section>

      {/* Features Outline */}
      <section className="px-6 py-20 lg:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold lg:text-4xl mb-6">
              Why Choose Solar Power?
            </h2>
            <div className="space-y-6">
              {[
                "Drastically reduce electricity bills",
                "Sustainable and eco-friendly impact",
                "Low maintenance and long lifespan",
                "Scalable setups for residential and commercial",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-green-500 shrink-0" />
                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-green-500/20 to-blue-500/5 p-8 border border-white/10 backdrop-blur-md"
          >
            <p className="text-xl leading-relaxed text-slate-800 dark:text-white/85">
              &ldquo;We provide end-to-end solar installations including system
              design, tier-1 panel procurement, and professional engineering to
              ensure maximum yield in any weather conditions.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Media Showcase */}
      <section className="px-6 py-20 lg:px-12 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/10">
        <div className="text-center mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-400">
            Our Work
          </p>
          <h2 className="text-4xl font-bold lg:text-5xl">
            Solar Projects in Action
          </h2>
        </div>

        {/* Gallery Grid – click any card to open the lightbox */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((media, idx) => (
            <motion.button
              key={idx}
              onClick={() => openLightbox(idx)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-3xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              aria-label={`Open ${media.alt}`}
            >
              {media.type === "image" ? (
                <Image
                  src={media.src}
                  alt={media.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              ) : (
                <video
                  src={media.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110 pointer-events-none"
                />
              )}
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  {media.type === "video" ? "▶ Play" : "⛶ View"}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-6 py-28 lg:px-12 mx-auto max-w-7xl">
        <div className="rounded-[24px] md:rounded-[40px] border border-slate-200 dark:border-white/10 bg-gradient-to-br from-green-500/10 to-transparent p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Ready to transition to solar?
          </h2>
          <p className="text-lg text-slate-600 dark:text-white/70 max-w-2xl mx-auto mb-10">
            Contact our engineering team today for a free assessment of your
            property and energy requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-xl bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-400 hover:text-white/80 items-center justify-center gap-2"
          >
            Request a Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {activeItem && lightboxIndex !== null && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            {/* Counter & label */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 pointer-events-none">
              <span className="text-white/50 text-xs tracking-widest uppercase">
                {lightboxIndex + 1} / {mediaItems.length}
              </span>
              <span className="text-white font-semibold text-sm">
                {activeItem.alt}
              </span>
            </div>

            {/* Left arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-3 md:left-6 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-green-500/70 border border-white/20 text-white transition-all duration-200 hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft size={26} />
            </button>

            {/* Right arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-3 md:right-6 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-green-500/70 border border-white/20 text-white transition-all duration-200 hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight size={26} />
            </button>

            {/* Media container */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full max-w-5xl max-h-[85vh] mx-14 md:mx-24 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {activeItem.type === "image" ? (
                <div className="relative w-full h-full">
                  <Image
                    src={activeItem.src}
                    alt={activeItem.alt}
                    fill
                    className="object-contain rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority
                  />
                </div>
              ) : (
                <video
                  ref={videoRef}
                  src={activeItem.src}
                  controls
                  playsInline
                  className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </motion.div>

            {/* Thumbnail strip */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto">
              {mediaItems.map((item, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(i);
                  }}
                  className={`relative flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    i === lightboxIndex
                      ? "border-green-400 scale-110"
                      : "border-white/20 opacity-50 hover:opacity-80"
                  }`}
                  aria-label={`Go to ${item.alt}`}
                >
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  ) : (
                    <div className="w-full h-full bg-white/10 flex items-center justify-center text-white text-xs">
                      ▶
                    </div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
