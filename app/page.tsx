import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Technology from "@/components/sections/Technology";
import Process from "@/components/sections/Process";
import Industries from "@/components/sections/Industries";
import Work from "@/components/sections/Work";
import Internship from "@/components/sections/Internship";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Technology />
        <Process />
        <Industries />
        <Work />
        <Internship />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
