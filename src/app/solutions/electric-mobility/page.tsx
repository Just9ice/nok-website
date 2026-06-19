"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bike, ArrowRight, Zap } from "lucide-react";

export default function ElectricMobilityPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-6 lg:px-12 bg-black/5 dark:bg-white/5">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-400/20 via-background to-background" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-purple-500/10 text-purple-400">
            <Bike size={40} />
          </div>
          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            The Future of {" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Mobility
            </span>
          </h1>
          <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-white/70 max-w-2xl mx-auto">
            Cost-effective and sustainable transportation solutions for modern urban mobility. Move faster, cleaner, and cheaper with NOK's electric fleet offerings.
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
            <h2 className="text-3xl font-bold lg:text-4xl mb-6">Drive Clean, Drive Smart</h2>
            <div className="space-y-6">
              {[
                "Zero emissions for a greener city",
                "Significantly lower maintenance and running costs",
                "Fast charging infrastructure solutions",
                "Ideal for daily commutes and delivery fleets",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Zap className="text-purple-500 shrink-0" />
                  <p className="font-medium text-slate-700 dark:text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/5 p-8 border border-white/10 backdrop-blur-md"
          >
            <p className="text-xl leading-relaxed text-slate-800 dark:text-white/85">
              "We provide an entire ecosystem — from high-performance electric bikes to reliable charging stations, empowering you to transition seamlessly to electric mobility."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Media Showcase */}
      <section className="px-6 py-20 lg:px-12 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/10">
        <div className="text-center mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-400">Our Work</p>
          <h2 className="text-4xl font-bold lg:text-5xl">Electric Fleet in the City</h2>
        </div>

        {/* Gallery Grid (Placeholders for public/projects) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { type: "image", src: "/projects/ev-image-1.jpg", alt: "Electric Bike Fleet" },
            { type: "video", src: "/projects/ev-video-1.mp4", alt: "EV on the Commute" },
            { type: "image", src: "/projects/ev-image-2.jpg", alt: "Charging Station Setup" },
            { type: "image", src: "/projects/ev-image-3.jpg", alt: "Delivery Bikes" },
          ].map((media, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-3xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10"
            >
              {media.type === "image" ? (
                <img src={media.src} alt={media.alt} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 bg-black/5 dark:bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-widest text-center mb-2">{media.alt} (Video)</p>
                  <p className="text-[10px] font-mono opacity-60 text-center">Add '{media.src}' to public/projects</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-6 py-28 lg:px-12 mx-auto max-w-7xl">
        <div className="rounded-[24px] md:rounded-[40px] border border-slate-200 dark:border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Ready to upgrade your commute?
          </h2>
          <p className="text-lg text-slate-600 dark:text-white/70 max-w-2xl mx-auto mb-10">
            Contact us today to explore our electric mobility products and find the right fit for your personal or business logistics.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-xl bg-purple-500 px-8 py-4 font-semibold text-white transition hover:bg-purple-400 hover:text-white/80 items-center justify-center gap-2"
          >
            Explore the Fleet <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
