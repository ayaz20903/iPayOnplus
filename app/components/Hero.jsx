"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-black text-white py-24 md:py-28 flex items-center justify-center overflow-hidden min-h-screen hero-section">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#14B8A6]/40 rounded-full blur-[180px] top-20 left-6 md:top-40 md:left-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white to-[#14B8A6] bg-clip-text text-transparent">
              The Future of
              <br />
              <span className="text-[#14B8A6]">Bank Payments</span>.
              <br /> Simple, Secure & Instant.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/90 max-w-xl mx-auto lg:mx-0">
              Accept instant bank payments and card payments—online or
              in-store—with one powerful platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-8 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-white text-[#14B8A6] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 justify-center">
                <Link
                  href="#contact"
                  className="flex item-center justify-center"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
              </button>

              {/* <button className="px-8 py-4 border border-white/40 text-white font-semibold rounded-xl backdrop-blur-md hover:bg-white/10 transition-all">
                Talk to Sales
              </button> */}
            </div>
          </motion.div>

          {/* RIGHT VIDEO / MOCKUP */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center lg:justify-end w-full"
          >
            <video
              src="/videos/animation-4.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-sm sm:max-w-md lg:max-w-full rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
