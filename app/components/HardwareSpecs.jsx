"use client";

import {
  Printer,
  Camera,
  Globe,
  ArrowDownToLine,
  Wifi,
  Barcode,
  Cpu,
  CreditCard,
  Wallet,
  Nfc,
  ScanLine, // <-- SIM replacement
} from "lucide-react";

const items = [
  {
    icon: <Printer size={36} className="text-amber-400" />,
    title: "Thermal Printer",
  },
  {
    icon: <Camera size={36} className="text-purple-400" />,
    title: "5.0 MP Camera",
  },
  {
    icon: <Globe size={36} className="text-blue-400" />,
    title: "4G Communication",
  },
  {
    icon: <ArrowDownToLine size={36} className="text-teal-400" />,
    title: "1 Mt. Drop Test",
  },
  {
    icon: <Wifi size={36} className="text-cyan-400" />,
    title: "Dual-Band Wi-Fi",
  },
  {
    icon: <Barcode size={36} className="text-indigo-400" />,
    title: "1D Barcode Scanner",
  },
  {
    icon: <Cpu size={36} className="text-red-400" />,
    title: "Qualcomm Snapdragon Quad-Core Processor",
  },
  {
    icon: <CreditCard size={36} className="text-green-400" />,
    title: "Magnetic Card Payment",
  },
  {
    icon: <CreditCard size={36} className="text-emerald-400" />,
    title: "Chip Card Payment",
  },
  {
    icon: <Wallet size={36} className="text-pink-400" />,
    title: "Mobile Payment",
  },
  {
    icon: <Nfc size={36} className="text-teal-300" />,
    title: "NFC Contactless Payment",
  },
  {
    icon: <ScanLine size={36} className="text-yellow-400" />,
    title: "eSIM",
  },
];

export default function HardwareSpecs() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-white to-[#14B8A6] bg-clip-text text-transparent pb-14">
          Hardware Specifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((l, i) => (
            // <div
            //   key={i}
            //   className="
            //     flex flex-col items-center justify-center
            //     rounded-2xl
            //     bg-gradient-to-br
            //     from-white/10
            //     to-teal-500/20
            //     shadow-xl
            //     py-10 px-6
            //   "
            // >
            //   <div className="bg-black/40 backdrop-blur-xl rounded-2xl">
            //     <div className="text-[#4fb0ff] opacity-80 mb-4">
            //       {item.icon}
            //     </div>
            //     <p className="text-white text-center text-lg leading-snug opacity-90">
            //       {item.title}
            //     </p>
            //   </div>
            // </div>

            <div
              key={i}
              className="
                rounded-2xl 
                p-[2px] 
                bg-gradient-to-br 
                from-white/10 
                to-teal-500/20 
                shadow-xl
              "
            >
              <div className="h-full w-full bg-black/40 backdrop-blur-xl rounded-2xl p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="text-6xl mb-3">{l.icon}</div>

                  <div className=" text-lg text-white">{l.title}</div>

                  <div className="text-gray-300 text-sm leading-relaxed">
                    {l.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
