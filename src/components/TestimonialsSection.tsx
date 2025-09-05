import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Executive",
      content: "FitPro completely transformed my approach to fitness. The trainers are incredible, the facilities are world-class, and the results speak for themselves! I've never felt stronger or more confident.",
      rating: 5,
      achievement: "Lost 35 lbs in 6 months",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content: "As someone with a demanding job, I love the flexibility and 24/7 access. The equipment is top-notch, and the personal trainers really understand how to work around my schedule.",
      rating: 5,
      achievement: "Gained 20 lbs of muscle",
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher & Mom",
      content: "The group classes are so motivating and fun! I've made lifelong friends here and achieved fitness goals I never thought possible. The childcare service is a game-changer for busy moms.",
      rating: 5,
      achievement: "Completed first marathon",
      avatar: "👩‍🏫"
    },
    {
      name: "David Thompson",
      role: "Retired Professional",
      content: "At 65, I thought my best years were behind me. FitPro proved me wrong! The senior-friendly programs and knowledgeable trainers have given me energy I haven't felt in decades.",
      rating: 5,
      achievement: "Improved mobility by 60%",
      avatar: "👨‍🦳"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-fitness-light rounded-full text-sm font-medium text-primary mb-4">
            Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-fitness-dark mb-6">
            Real People, Real Results
          </h2>
          <p className="text-xl text-fitness-gray max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real members have to say about 
            their transformation journey with FitPro.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-fitness-light border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <p className="text-fitness-gray italic mb-6 flex-grow leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="space-y-4">
                  <div className="bg-primary/10 px-4 py-2 rounded-lg">
                    <div className="text-sm font-semibold text-primary">Achievement</div>
                    <div className="text-sm text-fitness-dark">{testimonial.achievement}</div>
                  </div>
                  
                  <div className="flex items-center space-x-3 pt-4 border-t border-white">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-fitness-dark">{testimonial.name}</div>
                      <div className="text-sm text-fitness-gray">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-fitness-light p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9/5.0</div>
                <div className="text-fitness-gray">Average Rating</div>
                <div className="text-sm text-fitness-gray mt-1">1,200+ Reviews</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-fitness-gray">Goal Achievement Rate</div>
                <div className="text-sm text-fitness-gray mt-1">Within 12 months</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-fitness-gray">Member Retention</div>
                <div className="text-sm text-fitness-gray mt-1">After 1 year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;