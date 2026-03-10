import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import WhyChoose from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import Guarantees from "@/components/Guarantees";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <WhyChoose />
      <HowItWorks />
      <PricingSection />
      <Guarantees />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
