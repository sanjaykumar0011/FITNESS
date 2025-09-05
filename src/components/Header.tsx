import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
          
            <span className="text-2xl font-bold text-fitness-dark">FitPro</span>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-fitness-dark hover:text-primary transition-colors font-medium">Home</a>
            <a href="#services" className="text-fitness-dark hover:text-primary transition-colors font-medium">Services</a>
            <a href="#trainers" className="text-fitness-dark hover:text-primary transition-colors font-medium">Trainers</a>
            <a href="#membership" className="text-fitness-dark hover:text-primary transition-colors font-medium">Membership</a>
            <a href="#testimonials" className="text-fitness-dark hover:text-primary transition-colors font-medium">Reviews</a>
            <a href="#contact" className="text-fitness-dark hover:text-primary transition-colors font-medium">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:flex text-fitness-dark border-fitness-dark hover:bg-fitness-light">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
              Join Now
            </Button>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-fitness-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-fitness-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-fitness-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-fitness-dark hover:text-primary transition-colors font-medium">Home</a>
              <a href="#services" className="text-fitness-dark hover:text-primary transition-colors font-medium">Services</a>
              <a href="#trainers" className="text-fitness-dark hover:text-primary transition-colors font-medium">Trainers</a>
              <a href="#membership" className="text-fitness-dark hover:text-primary transition-colors font-medium">Membership</a>
              <a href="#testimonials" className="text-fitness-dark hover:text-primary transition-colors font-medium">Reviews</a>
              <a href="#contact" className="text-fitness-dark hover:text-primary transition-colors font-medium">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;