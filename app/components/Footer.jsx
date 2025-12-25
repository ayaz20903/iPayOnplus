"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-6 border-t border-[#2a2b3c]">
      <div className="container mx-auto px-6 relative flex items-center justify-center">
        {/* Center Copyright */}
        <p className="text-sm text-center">
          © {new Date().getFullYear()} iPayOn+. All rights reserved.
        </p>
        {/* Right side links */}
        <div className="absolute right-6 flex items-center gap-6">
          <Link href="privacy-policy" className="hover:underline">
            Privacy Policies
          </Link>
        </div>
      </div>
      <div className="container mx-auto mt-5">
        <p className="text-xs text-center">
          Disclaimer: iPayOn+ is powered by ZYNTRIX, which is powered by
          token.io, iPayOn+ does not provide or refer any banking or financial
          services. It supports only closed loop transactions for existing
          approved services and products by Token.io via ZYNTRIX.
        </p>
        <p className="text-xs text-center">
          For payment terminals, our ISO is signed and currently in process and
          pending FCA approval. Launching largest payment acquiring business
          soon.
        </p>
      </div>
    </footer>
  );
}
