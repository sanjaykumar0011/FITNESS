import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MembershipSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "per month",
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "Gym access during staffed hours",
        "Basic equipment usage",
        "Locker room access",
        "Online workout library",
        "Mobile app access"
      ],
      popular: false,
      buttonText: "Start Basic"
    },
    {
      name: "Premium", 
      price: "$59",
      period: "per month",
      description: "Most popular choice for serious fitness enthusiasts",
      features: [
        "24/7 gym access",
        "All equipment & facilities",
        "2 personal training sessions/month",
        "Group fitness classes",
        "Nutrition consultations",
        "Guest passes (2/month)",
        "Towel service"
      ],
      popular: true,
      buttonText: "Start Premium"
    },
    {
      name: "Elite",
      price: "$99", 
      period: "per month",
      description: "Ultimate fitness experience with VIP treatment",
      features: [
        "Everything in Premium",
        "Unlimited personal training",
        "VIP locker room access",
        "Massage therapy (2/month)",
        "Meal prep service",
        "Priority class booking",
        "Unlimited guest passes",
        "Supplement discounts"
      ],
      popular: false,
      buttonText: "Go Elite"
    }
  ];

  return (
    <section id="membership" className="py-20 bg-fitness-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-primary mb-4">
            Membership Plans
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-fitness-dark mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-fitness-gray max-w-3xl mx-auto">
            Flexible membership options designed to fit your lifestyle and goals. 
            All plans include our satisfaction guarantee and no long-term contracts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative bg-white border-2 hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'border-primary scale-105' : 'border-transparent hover:border-primary/20'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-12">
                <h3 className="text-2xl font-bold text-fitness-dark mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-fitness-dark">{plan.price}</span>
                  <span className="text-fitness-gray ml-2">{plan.period}</span>
                </div>
                <p className="text-fitness-gray">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-fitness-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 font-semibold ${plan.popular ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-fitness-dark hover:bg-fitness-dark/90 text-white'}`}
                >
                  {plan.buttonText}
                </Button>
                
                <div className="text-center mt-4 text-sm text-fitness-gray">
                  7-day free trial • Cancel anytime
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 p-8 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-fitness-dark mb-4">Corporate & Family Plans Available</h3>
          <p className="text-fitness-gray mb-6">
            Special discounts for groups of 5+ people and corporate wellness programs. 
            Contact us for custom pricing and exclusive benefits.
          </p>
          <Button variant="outline" className="text-fitness-dark border-fitness-dark hover:bg-fitness-dark hover:text-white">
            Get Group Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;