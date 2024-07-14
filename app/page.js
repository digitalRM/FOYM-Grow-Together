import Hero from "@/components/sections/1 - Hero";
import OurImpact from "@/components/sections/2 - OurImpact";
import Testimonials from "@/components/sections/3 - Testimonials";
import FAQ from "@/components/sections/4 - FAQ";
import Footer from "@/components/sections/5 - Footer";
import Header from "@/components/ui/111 - header";

export default function Home() {
  return (
    <div className="flex-col flex w-screen  scroll-smooth">
      {/* Make sure to edit the Header after removing the banner. Intead of top-14 xs:top-10, change it to top-0. */}
      <Header /> 
      <Hero />
      <OurImpact />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
