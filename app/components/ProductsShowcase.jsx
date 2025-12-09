"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ProductsShowcase() {
  const [active, setActive] = useState(1);

  const features = [
    {
      id: 1,
      title: "Payments",
      description:
        "Cut costs and boost your revenue with the easy, fast and secure way to pay. Streamlined user experiences see 90% of returning customers converting, and a 20+% increase in first-time conversions from the TrueLayer network.",
      image: "/explore1.png",
    },
    {
      id: 2,
      title: "Payouts",
      description:
        "Give your customers the instant gratification of receiving exactly what they want when they want it. Whether it's refunds, winnings, withdrawals or earnings—we send it in seconds.",
      image: "/explore2.png",
    },
    {
      id: 3,
      title: "Recurring Payments",
      description:
        "Customers can Pay by Bank for subscriptions, bills and one-click payments, via a linked Bank account. Our single API orchestrates the best method for you and your customers.",
      image: "/explore3.png",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-6xl text-center font-bold bg-gradient-to-r from-white to-[#14B8A6] bg-clip-text text-transparent pb-10 md:pb-14">
          Explore More
        </h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-4"
          >
            {features.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                onClick={() => setActive(active === item.id ? null : item.id)}
                className="cursor-pointer border-b border-white/10 pb-6 md:pb-8"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-2xl md:text-3xl bg-gradient-to-r from-white to-[#14B8A6] bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <span className="text-gray-400 text-xl">
                    {active === item.id ? "▴" : "▾"}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <AnimatePresence>
                  {active === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 md:mt-5 text-sm md:text-base text-white/80 leading-relaxed"
                    >
                      {item.description}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* MOBILE IMAGE BELOW DESCRIPTION */}
                <div className="mt-4 block lg:hidden rounded-xl overflow-hidden">
                  {active === item.id && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={900}
                      height={700}
                      className="w-full h-52 sm:h-64 md:h-72 object-cover rounded-xl"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT SIDE (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block relative w-full rounded-3xl overflow-hidden h-[480px] xl:h-[600px]"
          >
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={features.find((f) => f.id === active)?.image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={features.find((f) => f.id === active)?.image || ""}
                    alt="Feature preview"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
