import Image from "next/image";

export default function PaymentsHero() {
  return (
    <section className="w-full bg-[#000000] rounded-3xl py-6 md:py-10">
      <div className="max-w-7xl bg-[radial-gradient(circle,_#ffffff_0%,_#0F4A43_100%)] rounded-2xl mx-auto p-6 md:p-12">
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 md:gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-base md:text-lg font-semibold text-[#0E1110]">
              Small-Medium Businesses
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-[#0E1110] mt-2 leading-snug md:leading-tight">
              Start taking payments without delay
            </h1>

            <p className="text-[#0E1110] text-base md:text-lg mt-4 max-w-md">
              Discover flexible, secure payment tools created to help you grow.
            </p>

            {/* Links and Apply */}
            <div className="mt-6 space-y-3">
              {/* Hidden links stay hidden */}
              <a className="hidden items-center gap-2 text-[#001A4D] font-semibold cursor-pointer hover:underline">
                In-person payments →
              </a>
              <a className="hidden items-center gap-2 text-[#001A4D] font-semibold cursor-pointer hover:underline">
                Online payments →
              </a>

              <button className="mt-4 px-5 md:px-6 py-3 bg-[#0E1110] text-white rounded-lg font-semibold hover:bg-[#0d1c73] transition">
                Apply online →
              </button>

              <p className="text-xs text-[#001A4D]/60 mt-2 hidden">
                *Terms and conditions
              </p>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="w-full flex justify-center lg:justify-end">
            <Image
              src="/start-taking-payments3.png"
              alt="Product help"
              width={740}
              height={600}
              className="
                w-full 
                max-w-[420px] 
                md:max-w-[550px] 
                lg:max-w-none 
                h-auto 
                object-cover 
                rounded-xl 
                lg:rounded-none
              "
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
