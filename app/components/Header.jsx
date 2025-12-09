"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        // scrolling down → hide header
        setVisible(false);
      } else {
        // scrolling up → show header
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
        bg-black/60 backdrop-blur-lg border-b border-white/10
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="iPayon+" width={200} height={80} />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-white/80 text-sm">
          <Link href="/features" className="hover:text-white transition">
            Features
          </Link>
          {/* <Link href="/docs" className="hover:text-white transition">
            Docs
          </Link> */}
          <Link href="/pricing" className="hover:text-white transition">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          {/* <Link
            href="/login"
            className="text-white/80 hover:text-white transition text-sm"
          >
            Login
          </Link> */}

          <Link
            href="#contact"
            className="px-4 py-2 rounded-md bg-brand-teal hover:bg-brand-teal/80 text-white font-medium text-sm transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
