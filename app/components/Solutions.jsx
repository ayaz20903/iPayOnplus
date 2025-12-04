export default function Solutions() {
  const list = [
    {
      title: "Retail Stores",
      desc: "Replace POS card terminals — scan-to-pay without extra hardware.",
      icon: "🏪",
    },
    {
      title: "E-commerce",
      desc: "Offer barcode bank-payments at checkout to reduce fees.",
      icon: "🛒",
    },
    {
      title: "Service Providers",
      desc: "Send barcodes in invoices for instant client payments.",
      icon: "🧾",
    },
    {
      title: "Enterprise",
      desc: "Custom integrations, SLAs, and dedicated support.",
      icon: "🏢",
    },
  ];

  return (
    <section className="section-padding bg-black py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">
          Powerful Solutions for Every Business
        </h3>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {list.map((l, i) => (
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
                  <div className="text-5xl sm:text-6xl mb-3">{l.icon}</div>

                  <div className="font-semibold text-base sm:text-lg text-white">
                    {l.title}
                  </div>

                  <div className="text-gray-300 text-sm sm:text-[15px] leading-relaxed">
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
