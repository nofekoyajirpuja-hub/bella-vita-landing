import Header from "@/components/clinic/Header";
import Hero from "@/components/clinic/Hero";
import Excellence from "@/components/clinic/Excellence";
import TeachingModels from "@/components/clinic/TeachingModels";
import Results from "@/components/clinic/Results";
import Reviews from "@/components/clinic/Reviews";
import CTASection from "@/components/clinic/CTASection";
import ContactForm from "@/components/clinic/ContactForm";
import Footer from "@/components/clinic/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Excellence />
      <TeachingModels />
      <Results />
      <Reviews />
      <CTASection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
