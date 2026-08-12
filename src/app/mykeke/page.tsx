import Image from "next/image";

import { FadeIn } from "../components/ClientPageEffects";
import { PageBackground } from "../components/PageBackground";
import styles from "../shared.module.css";

const AppleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
  </svg>
);

export default function MyKekePage() {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900">
      <PageBackground />

      <main className="pt-[140px] pb-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn className="order-2 lg:order-1">
            <div className={styles.badge} style={{ borderColor: 'rgba(45, 212, 191, 0.3)', color: '#2dd4bf', background: 'rgba(2, 6, 23, 0.4)' }}>
              Software & Web Development
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-8 text-slate-900 dark:text-white leading-tight">
              MyKeke App
              <br />
              <span className="text-[#2dd4bf]">Mobility Reimagined.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Experience the future of urban transportation and software innovation. MyKeke combines seamless web application architecture with intuitive mobile design. Track, ride, and manage with a premium interface tailored for maximum efficiency and an unparalleled user experience.
            </p>

            <div className="mt-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium mb-4 border border-amber-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                App is currently in Preproduction
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center justify-center gap-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg opacity-50 cursor-not-allowed shadow-sm">
                  <AppleIcon />
                  <div className="text-left flex flex-col justify-center leading-none">
                    <span className="text-xs font-normal">Download on the</span>
                    <span>App Store</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400 px-8 py-4 rounded-2xl font-bold text-lg opacity-50 cursor-not-allowed shadow-sm">
                  <PlayStoreIcon />
                  <div className="text-left flex flex-col justify-center leading-none">
                    <span className="text-xs font-normal">GET IT ON</span>
                    <span>Google Play</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="order-1 lg:order-2">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/20 border border-slate-200 dark:border-slate-800">
              <Image 
                src="/projects/appMerge.png" 
                alt="MyKeke App interface showcasing software and web development services" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="glass-panel p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <h3 className="text-white text-xl font-bold mb-2">Modern Architecture</h3>
                  <p className="text-white/80 text-sm">Built with state-of-the-art frameworks to deliver unmatched speed and reliability.</p>
                </div>
              </div>
            </div>
          </FadeIn>
          
        </div>
      </main>
    </div>
  );
}
