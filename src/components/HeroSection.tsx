import { Button } from "@/components/ui/button";
import heroImage from "@/assets/fitness-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-white pt-24 pb-20 lg:pt-32 lg:pb-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-fitness-light rounded-full text-sm font-medium text-primary">
              🏆 #1 Fitness Studio in the City
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-fitness-dark leading-tight">
              Transform Your
              <span className="text-primary block">Body & Mind</span>
            </h1>
            <p className="text-xl text-fitness-gray max-w-lg leading-relaxed">
              Join thousands who've achieved their fitness goals with our expert trainers, 
              state-of-the-art equipment, and personalized workout plans designed for real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-fitness-dark border-2 border-fitness-dark hover:bg-fitness-dark hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
                Book a Tour
              </Button>
            </div>
            <div className="flex items-center space-x-12 pt-8 border-t border-fitness-light">
              <div className="text-center">
                <div className="text-3xl font-bold text-fitness-dark">1,200+</div>
                <div className="text-sm text-fitness-gray font-medium">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fitness-dark">25+</div>
                <div className="text-sm text-fitness-gray font-medium">Expert Trainers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fitness-dark">24/7</div>
                <div className="text-sm text-fitness-gray font-medium">Gym Access</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-3"></div>
            <img 
              src={heroImage} 
              alt="Professional fitness gym with modern equipment and training atmosphere" 
              className="relative w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-fitness-gray">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;