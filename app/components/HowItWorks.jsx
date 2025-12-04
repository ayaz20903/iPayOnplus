"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      title: "Scan the Barcode",
      desc: "Merchant shows a barcode; customer scans with mobile banking app.",
      img: "/scan-the-barcode.png",
    },
    {
      title: "Verify via Bank",
      desc: "Authenticate instantly using your bank — secure and seamless.",
      img: "/verify-via-bank.png",
    },
    {
      title: "Instant Settlement",
      desc: "Funds settle faster than card networks — direct bank transfer.",
      img: "/paid1.png",
    },
  ];

  return (
    <section id="how" className="py-20 relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ffffff] to-[#14B8A6] bg-clip-text text-transparent">
          Scan. Confirm. Paid.
        </h2>

        <p className="mt-4 text-white/80 max-w-2xl mx-auto text-base sm:text-lg">
          A simple three-step flow that removes cards and intermediaries.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + idx * 0.06 }}
              className="p-6 rounded-2xl shadow-sm"
            >
              <div className="text-lg sm:text-xl font-semibold">{s.title}</div>

              <div className="flex justify-center my-6">
                <Image
                  src={s.img}
                  alt={s.title}
                  width={400}
                  height={400}
                  className="w-full max-w-[260px] sm:max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>

              <div className="text-white/80 mt-2 text-sm sm:text-base">
                {s.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
