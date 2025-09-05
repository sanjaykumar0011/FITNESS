import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers tailored to your specific goals and fitness level. Get personalized attention and faster results.",
      price: "From $75/session",
      features: ["Custom workout plans", "Nutrition guidance", "Progress tracking", "Flexible scheduling"],
      icon: "💪"
    },
    {
      title: "Group Classes",
      description: "High-energy group workouts including HIIT, yoga, spinning, and strength training classes led by expert instructors.",
      price: "Included in membership",
      features: ["20+ class types", "All skill levels", "Premium equipment", "Community support"],
      icon: "👥"
    },
    {
      title: "Nutrition Coaching",
      description: "Personalized meal plans and nutrition guidance to fuel your fitness journey effectively with sustainable results.",
      price: "From $150/month",
      features: ["Custom meal plans", "Supplement advice", "Body composition analysis", "Regular check-ins"],
      icon: "🥗"
    },
    {
      title: "Recovery & Wellness",
      description: "Massage therapy, sauna, cryotherapy, and recovery programs to help you rest and rebuild stronger than ever.",
      price: "À la carte pricing",
      features: ["Sports massage", "Infrared sauna", "Cryotherapy", "Stretching areas"],
      icon: "🧘‍♀️"
    }
  ];

  return (
    <section id="services" className="py-20 bg-fitness-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-primary mb-4">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-fitness-dark mb-6">
            Comprehensive Fitness Solutions
          </h2>
          <p className="text-xl text-fitness-gray max-w-3xl mx-auto">
            From personalized training to recovery therapy, we offer everything you need 
            to achieve your fitness goals under one roof.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-fitness-dark mb-3">{service.title}</h3>
                <p className="text-fitness-gray leading-relaxed mb-4 flex-grow">{service.description}</p>
                
                <div className="space-y-4">
                  <div className="text-lg font-semibold text-primary">{service.price}</div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-fitness-gray">
                        <span className="w-4 h-4 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full mt-4 bg-fitness-dark hover:bg-fitness-dark/90 text-white">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-fitness-dark mb-4">Free Consultation Available</h3>
            <p className="text-fitness-gray mb-6">
              Not sure which service is right for you? Book a free 30-minute consultation 
              with one of our fitness experts to create your personalized plan.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 font-semibold">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;