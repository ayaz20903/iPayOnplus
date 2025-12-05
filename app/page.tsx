import Hero from "../app/components/Hero";
import Header from "../app/components/Header";
import HowItWorks from "../app/components/HowItWorks";
import BigText from "../app/components/BigText";
import Features from "../app/components/Features";
import Solutions from "../app/components/Solutions";
import SmartPaySection from "../app/components/SmartPaySection";
import PaymentsHero from "../app/components/PaymentsHero";
import DevicesSection from "../app/components/DevicesSection";
import ProductsShowcase from "../app/components/ProductsShowcase";
import HardwareSpecs from "../app/components/HardwareSpecs";
import ContactSection from "../app/components/ContactSection";
import Pricing from "../app/components/Pricing";
import Footer from "../app/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <SmartPaySection />
      <div className="relative w-full bg-black">
        <div className="absolute inset-0">
          {/* <div className="absolute w-100 h-100 bg-[#3B82F6]/70 rounded-full blur-[180px] top-10 left-10"></div> */}
          <div className="absolute w-100 h-100 bg-[#14B8A6]/100 rounded-full blur-[190px] bottom-25 right-30"></div>
        </div>
        <HowItWorks />
        <BigText />
      </div>

      <Solutions />
      <PaymentsHero />
      <DevicesSection />
      <ProductsShowcase />
      <HardwareSpecs />
      <ContactSection />

      {/* <Pricing /> */}
      <Footer />
    </main>
  );
}
