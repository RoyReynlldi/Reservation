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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Born from a passion for culinary excellence, Savoria represents the perfect harmony 
              of traditional techniques and contemporary innovation. Our journey began with a simple 
              vision: to create an extraordinary dining experience that celebrates the art of gastronomy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Chef at work"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Culinary Philosophy
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We believe that exceptional dining is more than just great food—it's about creating 
                moments that linger in memory. Every dish is crafted with meticulous attention to 
                detail, using only the finest seasonal ingredients sourced from local farms and 
                trusted suppliers.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our menu reflects a modern interpretation of classic flavors, where each plate 
                tells a story of tradition, innovation, and the chef's personal journey through 
                the world of gastronomy.
              </p>
            </div>
          </div>

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