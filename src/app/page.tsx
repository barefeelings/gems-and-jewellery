import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import GemCollection from "@/components/GemCollection";
import Jewellery from "@/components/Jewellery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <Navbar />
      <Hero />
      <About />
      <GemCollection />
      <Jewellery />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
