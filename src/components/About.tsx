import React from 'react';
import { Award, Users, Clock, Utensils } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for culinary excellence and outstanding service"
    },
    {
      icon: Users,
      title: "Expert Chefs",
      description: "Our team of internationally trained culinary masters"
    },
    {
      icon: Clock,
      title: "15+ Years",
      description: "Serving exceptional dining experiences since 2008"
    },
    {
      icon: Utensils,
      title: "Farm to Table",
      description: "Fresh, locally sourced ingredients in every dish"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800 text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 group-hover:text-slate-800 transition-all duration-300">
                  <feature.icon size={24} />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;