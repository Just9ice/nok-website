"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, SpotlightCard } from "../components/ClientPageEffects";
import { PageBackground } from "../components/PageBackground";

// Types

interface FormData {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}

// Contact Info Card

function InfoCard({
  icon,
  title,
  value,
  href,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  className?: string;
}) {
  const content = (
    <SpotlightCard
      className={`flex flex-col gap-4 rounded-2xl border border-white/30 bg-white/15 p-7 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/20 ${className}`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-700/60 border border-white/30 text-teal-300 backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-teal-700/30 hover:border-white/50">
        {icon}
      </div>
      <div>
        <p className="mg-0.5 text-sm font-semibold uppercase tracking-widest text-white/50">
          {title}
        </p>
        <p className="text-base font-medium text-white">{value}</p>
      </div>
    </SpotlightCard>
  );

  return href ? (
    <a href={href} className="no-underline">
      {content}
    </a>
  ) : (
    content
  );
}

// Field label wrapper

function FieldLabel({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="group flex flex-col gap-1.5">
      <span className="text-[13px] font-semibold tracking-wide text-slate-500 dark:text-white/60 transition-colors group-focus-within:text-teal-500 dark:group-focus-within:text-teal-400">
        {label}
      </span>
      {children}
    </label>
  );
}

// Field wrapper used in the form
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return <FieldLabel label={label}>{children}</FieldLabel>;
}

// Simple Input component that handles input and textarea
function Input(
  props: React.InputHTMLAttributes<HTMLInputElement> & {
    as?: "input" | "textarea";
  },
) {
  const { as, ...rest } = props;
  if (as === "textarea") {
    return (
      <textarea
        {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }
  return <input {...rest} />;
}

const inputClass =
  "w-full rounded-xl border border-slate-200 dark:border-white/20 bg-black/5 dark:bg-white/10 px-4 py-3 text-[15px] text-slate-900 dark:text-white outline-none ring-0 transition-all duration-200 placeholder:text-slate-400 dark:placeholder:text-white/30 hover:border-slate-300 dark:hover:border-white/30 focus:border-teal-500 dark:focus:border-teal-400 focus:bg-black/10 dark:focus:bg-white/15 focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-400/20 backdrop-blur-md";

// Main Contact Page

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground bg-background transition-colors duration-300">
      <div
        className="min-h-screen overflow-x-hidden text-white bg-local md:bg-fixed"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.55)), url('/contact-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      >
        <PageBackground />

        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 pt-28 pb-16 lg:py-28">
          {/* Hero Header */}
          <FadeIn className="mb-20 text-center">
            {/* Badge - matches financing page pill */}
            <div className="mb-6 inline-block rounded-full border border-white/30 bg-teal-700/60 px-7 py-2.5 backdrop-blur-md shadow-lg">
              <span className="text-sm font-semibold uppercase tracking-wider text-white">
                Contact Us
              </span>
            </div>

            <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl text-center">
              Let&rsquo;s Start a{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-teal-400">
                  Conversation
                </span>

                <svg
                  d="<2 6 C50 2, 150 2, 198 6"
                  stroke="#2dd4bf"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80 [text-shadow:0_4px_8px_rgba(0,0,0,0.5)]">
              We&rsquo;d love to hear from you! Whether you&rsquo;re ready to
              get started, have questions, or want a demo - reach out and our
              team will respond promptly.
            </p>
          </FadeIn>

          {/* Info Cards */}

          <div className="mb-16 mx-auto max-w-2xl grid grid-cols-1 gap-4 sm:grid-cols-2 justify-center">
            <FadeIn delay={0.5}>
              <InfoCard
                href="mailto:info@nokinc.com"
                className="lg:mb-5 xl:mb-8 sm:mb-5"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                }
                title="Email Us"
                value="info@nokinc.com"
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <InfoCard
                href="tel:+12407538561"
                className="lg:mb-5 xl:mb-8 sm:mb-5"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.07 3.38 2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
                  </svg>
                }
                title="Call Us"
                value="+1 (240) 753-8561"
              />
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="min-h-screen overflow-x-hidden mt-10">
        <div className="relative z-10 mx-auto max-w-5xl px-5 px-20 sm:px-8 lg:py-28">
          <FadeIn delay={0.15}>
            <SpotlightCard className="rounded-[24px] border border-slate-200 dark:border-white/30 bg-white dark:bg-white/10 p-6 sm:p-12 shadow-xl backdrop-blur-md">
              {/* Form Header */}
              <div className="mb-10 border-b border-slate-200 dark:border-white/10 pb-8">
                <p className="mb-1 text-xs fot-semibold uppercase tracking-widest text-teal-500 dark:text-teal-400">
                  Contact Form
                </p>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-white/50">
                  We&rsquo;ll get back to you within 1-2 business days. Looking
                  forward to connecting!
                </p>
              </div>

              {submitted ? (
                // Success State
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center gap-5 py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-700/60 border border-white/20 ring-8 ring-teal-500/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-teal-300"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Message Sent!
                    </h3>
                    <p className="mt-1 text-slate-600 dark:text-white/60">
                      Thank you for contacting us. Our team will get back to you
                      shortly!
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        product: "",
                        message: "",
                      });
                    }}
                    className="mt-4 rounded-xl border border-slate-300 dark:border-white/30 bg-black/5 dark:bg-white/15 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-white backdrop-blur-md transition-all hover:bg-black/10 dark:hover:bg-white/25 hover:border-slate-400 dark:hover:border-white/50"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                // Form

                <form
                  action=""
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  {/* Row 1 */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Email Address">
                      <Input
                        type="Email Address"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  {/* Row 2 */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone Number">
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="+1 (000) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Product of Interest">
                      <select
                        name="product"
                        id=""
                        value={formData.product}
                        onChange={handleChange}
                        className={`${inputClass} [&>option]:bg-white dark:[&>option]:bg-[#0f2027] [&>option]:text-slate-900 dark:[&>option]:text-white`}
                      >
                        <option value="">Select a product</option>
                        <option value="battery">
                          Battery &amp; Inverter Systens
                        </option>
                        <option value="solar">Solar Power Systems</option>
                        <option value="tricycle">Electric Tricycle</option>
                        <option value="software">Software Solutions</option>
                        <option value="chargers">EV & LFP Chargers</option>
                        <option value="lights">Solar & Security Lights</option>
                        <option value="industrial">
                          Industrial & Agricultural
                        </option>
                        <option value="cooling">Solar-Powered Cooling</option>
                      </select>
                    </Field>
                  </div>

                  {/* Message */}
                  <Field label="Message">
                    <textarea
                      name="message"
                      id=""
                      placeholder="Tell us about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`${inputClass} resize-y`}
                    />
                  </Field>

                  {/* Submit row */}
                  <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500 dark:text-white/40">
                      We respond within 1 - 2 business days.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-400 to-teal-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:to-teal-700 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                    >
                      Send Message
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </SpotlightCard>
          </FadeIn>

          {/* Bottom Note */}

          <FadeIn delay={0.2} className="mt-12 text-center pb-12">
            <p className="text-sm text-slate-500 dark:text-white/40">
              NOK Inc · Clean Energy Solutions ·{" "}
              <a
                href="mailto:info@nokinc.com"
                className="text-teal-400 underline-offset-2 hover:underline"
              >
                info@nokinc.com
              </a>
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
