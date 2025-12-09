export default function DevicesSection() {
  const cards = [
    {
      img: "/devices.png",
      tag: "Built to simplify your operations",
      title: "Solution 360",
      desc: "A complete business management and POS platform in one place.",
      link: "#",
    },
    {
      img: "/mobile-card-machines.png",
      tag: "Engineered for flexibility",
      title: "Mobile card machines",
      desc: "Accept payments anywhere on your premises with a portable card reader.",
      link: "#",
    },
    {
      img: "/counter-card-machine.png",
      tag: "Designed for speed and consistency",
      title: "Countertop card machines",
      desc: "Process payments quickly from a fixed location.",
      link: "#",
    },
  ];

  return (
    <section className="w-full py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Small heading */}
        {/* <p className="text-[#1B2A7A] font-semibold text-sm mb-2">
          Small business options
        </p> */}

        {/* Main heading */}
        <div className="pb-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#14B8A6] to-[#ffffff] bg-clip-text text-transparent leading-tight">
            Devices, terminals, and accessories
          </h2>
          <p className="text-white my-4">
            Tools for seamless in-store and in-person payments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={card.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-[#0E1110] font-semibold text-sm">
                  {card.tag}
                </p>

                <h3 className="text-2xl font-bold text-[#0E1110] mt-2">
                  {card.title}
                </h3>

                <p className="text-[#0E1110] mt-2 text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
