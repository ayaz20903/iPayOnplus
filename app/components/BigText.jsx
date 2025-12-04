"use client";

import { motion } from "framer-motion";

export default function BigText() {
  return (
    <section className="w-full h-[65vh] flex items-center justify-center px-6 relative">
      <div className="absolute inset-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container text-center"
      >
        <h1
          className="
            text-3xl sm:text-4xl md:text-6xl lg:text-8xl 
            font-bold leading-tight 
            bg-gradient-to-r from-[#14B8A6] to-[#ffffff] 
            bg-clip-text text-transparent 
           mx-auto
          "
        >
          One Platform. All Payments. Zero Complexity.
        </h1>
      </motion.div>
    </section>
  );
}
