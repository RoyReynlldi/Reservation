import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Critic",
      content: "Savoria delivers an extraordinary culinary journey that exceeds every expectation. The attention to detail and flavor profiles are simply magnificent.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Regular Guest",
      content: "Every visit to Savoria is a celebration. The service is impeccable, the atmosphere is perfect, and the food is consistently outstanding.",
      rating: 5,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Emma Rodriguez",
      role: "Event Planner",
      content: "We've hosted several corporate events at Savoria, and they never disappoint. The private dining experience is unmatched in the city.",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Guests Say
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued guests 
              have to say about their experiences at Savoria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 relative shadow-xl">
                <Quote className="text-yellow-500 w-8 h-8 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 w-5 h-5 fill-current" />
                  ))}
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 text-yellow-500">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-white text-lg font-semibold">4.9/5</span>
              <span className="text-slate-300">from 847+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;