"use client";

import Image from "next/image";

export default function SmartPaySection() {
  return (
    <section className="w-full bg-black py-20">
      <div
        className="container mx-auto 
        bg-[radial-gradient(circle,_#ffffff_0%,_#0F4A43_100%)] 
        rounded-2xl"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 
          backdrop-blur-xl rounded-2xl items-center 
          min-h-[550px] 
          px-6 sm:px-8 lg:px-12 py-12"
        >
          {/* LEFT CONTENT */}
          <div className="col-span-2 flex flex-col justify-center py-6 sm:py-10 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E1110] mb-4 leading-snug">
              Smarter payments start at your fingertips
            </h2>

            <p className="text-base sm:text-lg text-black mb-6 mx-auto lg:mx-0 max-w-md">
              Ready to discover how iPayOn+ can fast-track your growth?
            </p>

            <a
              href="/en-GB/contact-us"
              className="inline-flex items-center gap-2 
              bg-[#0E1110] text-white 
              px-6 py-3 rounded-md text-base font-semibold 
              w-fit mx-auto lg:mx-0"
            >
              Contact us →
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-span-3 w-full flex items-center justify-center">
            <Image
              src="/explore-img.png"
              alt="Product help"
              width={300}
              height={300}
              className="w-[80%] sm:w-[70%] lg:w-[80%] h-auto object-contain rounded-b-xl lg:rounded-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
