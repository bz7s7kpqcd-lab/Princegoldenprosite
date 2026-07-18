import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Philosophy from "@/components/Philosophy";
import Timeline from "@/components/Timeline";
import Now from "@/components/Now";
import Writing from "@/components/Writing";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Products />
        <Philosophy />
        <Timeline />
        <Now />
        <Writing />
        <Skills />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
