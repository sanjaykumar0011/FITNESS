import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-fitness-light rounded-full text-sm font-medium text-primary mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-fitness-dark mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-fitness-gray max-w-3xl mx-auto">
            Have questions about our programs or want to schedule a tour? 
            We're here to help you begin your fitness journey.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-fitness-dark mb-6">Visit Our Gym</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-fitness-dark mb-2">Location</h4>
                    <p className="text-fitness-gray">
                      Salt Lake Sector V<br/>
                      Downtown District<br/>
                     Kolkata, WB
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🕐</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-fitness-dark mb-2">Hours</h4>
                    <div className="text-fitness-gray space-y-1">
                      <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
                      <p>Saturday - Sunday: 6:00 AM - 10:00 PM</p>
                      <p className="font-medium text-primary">24/7 Access for Premium+ Members</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-fitness-dark mb-2">Contact</h4>
                    <div className="text-fitness-gray space-y-1">
                      <p>Phone: (555) 123-4567</p>
                      <p>Email: hello@fitpro.com</p>
                      <p>Emergency: (555) 987-6543</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-fitness-light p-6 rounded-xl">
              <h4 className="font-bold text-fitness-dark mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15,000+</div>
                  <div className="text-sm text-fitness-gray">Sq Ft Facility</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-sm text-fitness-gray">Parking Spots</div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-fitness-light border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-fitness-dark mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-fitness-dark mb-2">First Name</label>
                    <Input className="bg-white border-fitness-light focus:border-primary" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-fitness-dark mb-2">Last Name</label>
                    <Input className="bg-white border-fitness-light focus:border-primary" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-fitness-dark mb-2">Email Address</label>
                  <Input type="email" className="bg-white border-fitness-light focus:border-primary" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-fitness-dark mb-2">Phone Number</label>
                  <Input type="tel" className="bg-white border-fitness-light focus:border-primary" placeholder="(555) 123-4567" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-fitness-dark mb-2">What are you interested in?</label>
                  <select className="w-full px-3 py-2 bg-white border border-fitness-light rounded-md focus:border-primary focus:outline-none">
                    <option>Select an option</option>
                    <option>Personal Training</option>
                    <option>Group Classes</option>
                    <option>Membership Information</option>
                    <option>Corporate Wellness</option>
                    <option>Facility Tour</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-fitness-dark mb-2">Message</label>
                  <Textarea 
                    className="bg-white border-fitness-light focus:border-primary min-h-[120px]" 
                    placeholder="Tell us about your fitness goals or any questions you have..."
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 font-semibold">
                  Send Message
                </Button>
                
                <p className="text-sm text-fitness-gray text-center">
                  We'll get back to you within 24 hours. For immediate assistance, please call us directly.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;