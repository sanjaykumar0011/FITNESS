const Footer = () => {
  return (
    <footer className="bg-fitness-dark py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              
              <span className="text-xl font-bold text-white">FitPro</span>
            </div>
            <p className="text-white/70">
              Transform your body and mind with expert guidance and state-of-the-art facilities.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-primary transition-colors">Personal Training</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Group Classes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nutrition Coaching</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Recovery & Wellness</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Trainers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Membership</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li>Salt Lake Sector V</li>
              <li>Kolkata, WB</li>
              <li>(555) 123-4567</li>
              <li>info@fitpro.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
          © 2024 FitPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;