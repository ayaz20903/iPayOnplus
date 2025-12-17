"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import {
  Store,
  Zap,
  QrCode,
  BarChart3,
  Globe,
  Terminal,
  BadgePercent,
  ShieldCheck,
} from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: <Zap size={28} className="text-teal-400" />,
      title: "Instant Bank Payments",
      body: "Direct bank transfers with ultra-low fees and instant payouts.",
    },
    {
      icon: <Terminal size={28} className="text-blue-400" />,
      title: "Card Terminals",
      body: "Modern wireless terminals that accept every payment, anywhere.",
    },
    {
      icon: <Globe size={28} className="text-indigo-400" />,
      title: "For Online Businesses",
      body: "Seamless online checkout with plugins, APIs, links, and QR payments.",
    },
    {
      icon: <Store size={28} className="text-amber-400" />,
      title: "For Offline Businesses",
      body: "Smart QR and card solutions built for stores, counters, and multi-location setups.",
    },
    {
      icon: <BadgePercent size={28} className="text-green-400" />,
      title: "Save on Fees",
      body: "Lower transaction costs than card rails.",
    },
    {
      icon: <QrCode size={28} className="text-purple-400" />,
      title: "Barcode Payments",
      body: "A clean barcode-first UX for merchants and customers.",
    },
    {
      icon: <ShieldCheck size={28} className="text-red-400" />,
      title: "Robust Security",
      body: "PSD2-grade controls, encryption and monitoring.",
    },
    {
      icon: <BarChart3 size={28} className="text-pink-400" />,
      title: "Analytics & Dashboard",
      body: "Merchant dashboard for settlements, disputes and insights.",
    },
  ];

  const duplicated = [...items, ...items, ...items, ...items, ...items];

  const x = useMotionValue(0);
  const isPaused = useRef(false);
  const speed = 2; // control scroll speed

  useAnimationFrame(() => {
    if (isPaused.current) return;

    const current = x.get();
    x.set(current - speed);

    const totalWidth = duplicated.length * (260 + 24);
    if (current <= -totalWidth) x.set(0);
  });

  return (
    <section id="features" className="section-padding bg-black p-0">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-[#14B8A6] bg-clip-text text-transparent pb-5">
          Why iPayOn+
        </h2>

        <div
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
          className="overflow-hidden mt-12"
        >
          <motion.div style={{ x }} className="flex gap-6">
            {duplicated.map((it, idx) => (
              <div
                key={idx}
                className="
                flex-shrink-0 
                rounded-2xl 
                p-[2px] 
                bg-gradient-to-br 
                from-white/10 
                to-teal-500/20 
                shadow-xl
              "
                style={{ width: "260px", height: "260px" }}
              >
                <div className="h-full w-full bg-black/40 backdrop-blur-xl rounded-2xl p-6 flex flex-col justify-between">
                  <div className="flex flex-col gap-3 h-full justify-center items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                      {it.icon}
                    </div>

                    <h3 className="font-semibold text-lg text-white">
                      {it.title}
                    </h3>

                    <p className="text-gray-300 break-words line-clamp-4 overflow-hidden text-sm">
                      {it.body}
                    </p>
                  </div>

                  {/* <div className="text-xs text-gray-500">iPayon+</div> */}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
