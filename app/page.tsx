import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StackMarquee from "@/components/StackMarquee";
import Work from "@/components/Work";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StackMarquee />
        <Work />
        <Approach />
        <About />
      </main>
      <Footer />
    </>
  );
}
