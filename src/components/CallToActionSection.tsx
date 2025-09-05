import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Start Your Fitness Journey?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join FitPro today and take the first step towards a healthier, stronger you. 
          Your transformation starts now.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold"
          >
            Join Now - Free Trial
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-white border-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
          >
            Schedule a Tour
          </Button>
        </div>
        
        <div className="mt-8 text-white/80 text-sm">
          No commitment required • Cancel anytime • 7-day free trial
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;