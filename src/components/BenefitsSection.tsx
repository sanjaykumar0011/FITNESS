const BenefitsSection = () => {
  const benefits = [
    {
      title: "Expert Guidance",
      description: "Work with certified trainers who understand your unique needs and goals."
    },
    {
      title: "State-of-the-Art Equipment",
      description: "Access to the latest fitness technology and premium equipment."
    },
    {
      title: "Flexible Scheduling",
      description: "Train on your schedule with 24/7 gym access and flexible class times."
    },
    {
      title: "Proven Results",
      description: "Join a community that celebrates every milestone and achievement."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-fitness-dark mb-6">
              Why Choose FitPro?
            </h2>
            <p className="text-lg text-fitness-gray mb-8">
              We're not just a gym – we're your partner in building a healthier, 
              stronger version of yourself. Here's what sets us apart.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-fitness-dark mb-2">{benefit.title}</h3>
                    <p className="text-fitness-gray">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-fitness-light rounded-lg p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-fitness-gray mb-6">Member Satisfaction Rate</div>
                
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-fitness-dark">15k+</div>
                    <div className="text-sm text-fitness-gray">Workouts Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-fitness-dark">4.9★</div>
                    <div className="text-sm text-fitness-gray">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;