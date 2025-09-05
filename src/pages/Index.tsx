import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrainersSection from "@/components/TrainersSection";
import MembershipSection from "@/components/MembershipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToActionSection from "@/components/CallToActionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <TrainersSection />
        <MembershipSection />
        <TestimonialsSection />
        <CallToActionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
