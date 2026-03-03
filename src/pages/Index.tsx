import Header from "@/components/clinic/Header";
import Hero from "@/components/clinic/Hero";
import Location from "@/components/clinic/Location";
import Procedures from "@/components/clinic/Procedures";
import Results from "@/components/clinic/Results";
import About from "@/components/clinic/About";
import Reviews from "@/components/clinic/Reviews";
import CTASection from "@/components/clinic/CTASection";
import Footer from "@/components/clinic/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Location />
      <Procedures />
      <About />
      <Results />
      <Reviews />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
