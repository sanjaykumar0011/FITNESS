import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TrainersSection = () => {
  const trainers = [
    {
      name: "Sarah Mitchell",
      specialization: "Strength Training & HIIT",
      experience: "8+ Years",
      certifications: "NASM-CPT, CSCS",
      description: "Specializes in functional strength training and high-intensity workouts for maximum results.",
      avatar: "👩‍💼"
    },
    {
      name: "Mike Rodriguez",
      specialization: "Olympic Lifting & Powerlifting", 
      experience: "12+ Years",
      certifications: "USAW, NSCA-CSCS",
      description: "Former competitive powerlifter who helps clients build serious strength and proper form.",
      avatar: "👨‍💼"
    },
    {
      name: "Emma Thompson", 
      specialization: "Yoga & Mindfulness",
      experience: "6+ Years",
      certifications: "RYT-500, Mindfulness Coach",
      description: "Combines traditional yoga practice with modern mindfulness techniques for holistic wellness.",
      avatar: "👩‍🦰"
    },
    {
      name: "David Chen",
      specialization: "Sports Performance & Rehab",
      experience: "10+ Years", 
      certifications: "CSCS, FMS, SFMA",
      description: "Sports performance specialist with expertise in injury prevention and rehabilitation.",
      avatar: "👨‍⚕️"
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-fitness-light rounded-full text-sm font-medium text-primary mb-4">
            Meet Our Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-fitness-dark mb-6">
            World-Class Trainers
          </h2>
          <p className="text-xl text-fitness-gray max-w-3xl mx-auto">
            Our certified trainers bring years of experience and proven results. 
            Each trainer is carefully selected for their expertise and passion for helping clients succeed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {trainer.avatar}
                </div>
                <h3 className="text-xl font-bold text-fitness-dark mb-2">{trainer.name}</h3>
                <div className="text-primary font-semibold mb-2">{trainer.specialization}</div>
                <div className="text-sm text-fitness-gray mb-4">
                  <div>{trainer.experience} Experience</div>
                  <div className="font-medium">{trainer.certifications}</div>
                </div>
                <p className="text-fitness-gray text-sm mb-6 leading-relaxed">{trainer.description}</p>
                <Button variant="outline" className="w-full text-fitness-dark border-fitness-dark hover:bg-fitness-dark hover:text-white">
                  Book Session
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 font-semibold">
            View All Trainers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;