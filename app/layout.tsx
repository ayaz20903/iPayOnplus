import "./globals.css";
import { Inter } from "next/font/google";
import AgeGate from "../app/components/AgeGate";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iPayon+",
  description: "The Future of Bank Payments. Simple, Secure & Instant.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AgeGate>{children}</AgeGate>
      </body>
    </html>
  );
}
