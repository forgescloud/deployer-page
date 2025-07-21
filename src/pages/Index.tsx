import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import WhyChoose from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import Guarantees from "@/components/Guarantees";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <WhyChoose />
      <HowItWorks />
      <Guarantees />
      <Testimonials />
      <FinalCTA />
    </div>
  );
};

export default Index;
